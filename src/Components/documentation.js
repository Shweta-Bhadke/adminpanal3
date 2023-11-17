
import { Button } from "antd"
import { useTranslation } from 'react-i18next';


import { useEffect, useState } from 'react';
import { translatefun } from "./translatefn";
import { useDispatch, useSelector } from "react-redux";
import { permissionchi } from "../locals/chi/content";
import { permissioneng } from "../locals/en/content";

export function Introduction(){
   
  const [translate,settranslate] = useState("en")
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(permissioneng, permissionchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])
    return(
        <div>
        <h1 className=' text-5xl font-semibold'>{translate.intro}</h1>
        <p className=' my-7 text-[0.9rem]'>{translate.intro1}</p>
        
        <h1 className='text-4xl font-semibold'>{translate.ca}</h1>
        <p className=' my-4'>{translate.ca1}</p>
        <list >
            <div className=' text-blue-700  cursor-pointer flex flex-col my-7'>
                
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#l'>{translate.l1}</a></div>
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#r'>{translate.l2}</a></div>
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#h'>{translate.l3}</a></div>
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#t'>{translate.l4}</a></div>
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#ty'>Typescript</a></div>
              <div className='flex items-center space-x-3'><span className='w-[8px] h-[8px] rounded-full border-[2px] border-gray-600'></span> <a className='hover:text-blue-900' href='#i'>{translate.l5}</a></div>
               
            </div>
            <div id='l' className='text-4xl font-semibold'>{translate.l1}</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>
            <div id='r' className='text-4xl font-semibold'>{translate.l2}</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>
            <div id='h' className='text-4xl font-semibold'>{translate.l3}</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>
            <div id='t' className='text-4xl font-semibold'>{translate.l4}</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>
            <div id='ty' className='text-4xl font-semibold'>Typescript</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>
            <div id='i' className='text-4xl font-semibold'>{translate.l5}</div>
            <p style={{height:"200px",marginLeft:"0.5rem",marginTop:"0.5rem"}}>2333</p>

        </list>
        </div>
    )
}