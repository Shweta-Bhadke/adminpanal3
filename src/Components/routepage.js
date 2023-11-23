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
  const { mode } = useSelector((state) => state.darkMode);
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
  const login1 = useSelector((state)=>state.login.login.checklogin)
   useEffect(()=>{

    let translate12 = translatefun(permissioneng, permissionchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])


  
    return(
        <div>
          {
            login1?(<div>When you see this page, it means you are logged in.</div>):( <Result
              status="403"
              title={<h1 className={`${mode?' text-white':''}`}>403</h1>}
              subTitle={<p className={`${mode?' text-white':''}`}>{translate.sorry}</p>}
              extra={<Link to={'/login'}><Button type='button' className=' bg-[#5dc2b6] text-white hover:bg-[#81d6cc]' >{translate.login}</Button></Link>}
             />)
          }
        
  </div>
    )
}