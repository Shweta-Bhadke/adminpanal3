import { useTranslation } from 'react-i18next';
import { Button, Flex,Result } from 'antd';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { permissionchi } from "../locals/chi/content";
import { permissioneng } from "../locals/en/content";
import { translatefun } from "./translatefn";

import { dark } from '@mui/material/styles/createPalette';
import { Link } from 'react-router-dom';
export function R404(){
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
    status="404"
    title={<h1>404</h1>}
    subTitle={<p >{translate.sorry1}</p>}
    extra={<Button type='button' className=' bg-[#5dc2b6] text-white hover:bg-[#81d6cc]' >{translate.home}</Button>}
   />
  </div>
    )
}