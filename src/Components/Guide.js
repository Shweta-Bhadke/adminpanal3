
import { Button } from "antd"
import { useTranslation } from 'react-i18next';


import { useEffect, useState } from 'react';
import { translatefun } from "./translatefn";
import { useDispatch, useSelector } from "react-redux";
import { permissionchi } from "../locals/chi/content";
import { permissioneng } from "../locals/en/content";
export function Guide() {
  const [translate,settranslate] = useState("en")
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(permissioneng, permissionchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])
   
     
        
     
   
    return(
        <>
        <h1>{translate.guide}
            <a href="https://github.com/kamranahmedse/driver.js" target="_blank" className=" text-blue-700" > drive.js</a>
        </h1>
        <Button type='button' className=' bg-[#5dc2b6] text-white hover:bg-[#81d6cc] mt-5' >{translate.guide1}</Button>
        </>
    )
    
}