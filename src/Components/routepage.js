import { useTranslation } from 'react-i18next';
import { Button, Flex,Result } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { permissionchi } from "../locals/chi/content";
import { permissioneng } from "../locals/en/content";
import { translatefun } from "./translatefn";

export function Routepermission(){
  const [translate,settranslate] = useState("en")
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(permissioneng, permissionchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])


  
    return(
        <div>
         <Result
    status="403"
    title={<h1>403</h1>}
    subTitle={<p>{translate.sorry}</p>}
    extra={<Link to={'/login'}><Button type='button' className=' bg-[#5dc2b6] text-white hover:bg-[#81d6cc]' >{translate.login}</Button></Link>}
   />
  </div>
    )
}