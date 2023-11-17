import React, { useEffect, useState } from "react";
import { navchi } from "../locals/chi/navbar";
import { naven } from "../locals/en/navbar";
import { Guide } from "./Guide";
import avastor from '../assets/header/avator.jpeg'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  PieChartOutlined,
  UserOutlined,
  LoginOutlined
} from "@ant-design/icons";
import { Introduction } from "./documentation";
import { Routepermission } from "./routepage";
import { R404 } from "./r404";
import { Link } from "react-router-dom";
import { translatefun } from "./translatefn";
import  Translate  from '../Components/translate';
import { useTranslation } from 'react-i18next';
import china from '../assets/header/china.png'
import england from '../assets/header/united-states.png'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import { Button, Menu, ConfigProvider,Tooltip } from "antd";
import { setLangEng } from "../Store/Features/translatelang";

import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Store/Features/DarkModeSlice";
import MoonSvg from "../assets/header/moon.svg";
import SunSvg from "../assets/header/sun.svg";
import { ReactComponent as NoticeSvg } from "../assets/header/notice.svg";
import ReactSvg from "../assets/logo/react.svg";
import AntdSvg from "../assets/logo/antd.svg";
import { setLogin } from "../Store/Features/login";
// import Asidebar from "./Asidebar";
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const Header = () => {
  const login1 = useSelector((state)=>state.login.login.checklogin)
  const [collapsed, setCollapsed] = useState(false);
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const { mode } = useSelector((state) => state.darkMode);
  const [handlekey,setkey] = useState(null)
  const [translate1,settranstaelang] = useState("en")
  const dispatch = useDispatch();
  const lang = useSelector((state)=>state.handleLang.lang.newlang)

  const handlelogout = () =>{
    dispatch(setLogin({checklogin:false}))
  }

  useEffect(()=>{
    let translate12 = translatefun(naven,navchi,lang)
     settranstaelang(translate12)
    
  },[lang])

  
const languageChange = (newlang) =>{
 dispatch(setLangEng({newlang}))
}

function handleitem(items){
  setkey(items)
}

console.log(handlekey)
  const handleChange = () => {
    setToggle(!toggle);
    dispatch(toggleDarkMode());
  };

  const CloseMenu = () => {
    setToggle(false);
    dispatch(toggleDarkMode());
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const items = [
    getItem(`${t(translate1.dashboard)}`, '1', <DashboardOutlined />),
    getItem(`${t(translate1.documentaions)}`, '2', <DesktopOutlined />),
    getItem(`${t(translate1.guide)}`, '3', <ContainerOutlined />),
    getItem(`${t(translate1.permission)}`, 'sub1', <MailOutlined />, [
      getItem(`${t(translate1.route)}`, '5'),
      getItem(`${t(translate1.error)}`, '6',),
      
    ]),
    getItem(`${t(translate1.component)}`, 'sub2', <AppstoreOutlined />, [
      getItem(`${t(translate1.form)}`, '9'),
      getItem(`${t(translate1.table)}`, '10'),
      getItem(`${t(translate1.search)}`, '11'),
      getItem(`${t(translate1.aside)}`, '12'),
      getItem(`${t(translate1.tabs)}`, '13'),
      getItem(`${t(translate1.radio)}` , '14'),
     
    ]),
    getItem(`${t(translate1.business)}`, 'sub3', <AppstoreOutlined />, [
      getItem(`${t(translate1.basic)}`, '15'),
      getItem(`${t(translate1.searc)}`, '16'),
      getItem(`${t(translate1.aside1)}` , '17'),
      getItem(`${t(translate1.nav)}`, '18'),
      getItem(`${t(translate1.tabs1)}`, '19'),
     
      
    ]),
  ];
  const text = <><div className='flex' onClick={()=>{languageChange("chi")}}><img src={china} alt='image1' className=' w-[30px] h-[30px] mr-2'></img>简体中文</div><div className=' flex' onClick={()=>{languageChange("en")}}><img src={england} alt='image2'  className=' w-[30px] h-[30px] mr-2'></img>English</div></>;


  const text1 = <><div className='flex px-4 py-2 cursor-pointer hover:bg-gray-700 hover:rounded-md'><UserOutlined />Account</div><div className=' flex px-4 cursor-pointer hover:bg-gray-700 py-2 hover:rounded-md' onClick={handlelogout}><LoginOutlined />Log Out</div></>;

  return (
    <div
      style={{
        background: mode ? "#1f1f1f" : "white",
        color: mode ? "white" : "black",
        maxHeight:"100vh",
        
       
      
      }}
    >
      <div className="flex items-center justify-between px-[40px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-[60px] " >
        {" "}
        <div className="flex items-center p-3">
          <img
            src={ReactSvg}
            alt="img1"
            style={{ marginRight: "20px" }}
            className="w-[35px] hidden md:block"
          />{" "}
          <img
            src={AntdSvg}
            alt="img2"
            style={{ marginRight: "20px" }}
            className="w-[35px] hidden md:block"
          />
          <div className="">
            <div className={`${!collapsed ? "pl-16" : ""} mt-5`}>
              <div
                onClick={toggleCollapsed}
                style={{
                  marginBottom: 16,
                  fontSize: "1.5rem",
                }}
                className=" cursor-pointer"
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[50px]">
      
          {" "}
          {!toggle ? (
            <DarkModeOutlinedIcon
              className="cursor-pointer"
              onClick={handleChange}
            />
          ) : (
            <LightModeOutlinedIcon
              className="cursor-pointer"
              onClick={CloseMenu}
            />
          )}
         
         
        
          <NoticeSvg className="w-[20px] h-[20px] cursor-pointer" />
          <Tooltip placement="bottom" title={text}>
                <div className=' cursor-pointer'><GTranslateOutlinedIcon/></div>
                </Tooltip>

                {
                  login1 ? (<>
                    <div>
                      <Tooltip placement="bottom" title={text1} className=" rounded-md">
                        <img src={avastor} alt="image1" className="h-[40px] w-[40px]" />
                      </Tooltip>
                    </div>
                  </>):
                  (  <Link to={'/login'}>  <div>{t(`${translate1.login}`)}</div></Link>)
                }
            

              
        
        </div>
      </div>
      <section className="flex w-[100%]" style={{overflow:"hidden"}}>
        <aside className={`flex`}>
          <div
            style={{
              // height: "100%",
              width: collapsed ? 80 : 220,
            
            }}
          >
            <ConfigProvider
              theme={{
                components: {
                  Menu: {
                    darkItemSelectedBg: "#2c4d52",
                    darkItemHoverBg: "#434445",
                    itemSelectedBg: "#80e8dc",
                    itemSelectedColor: "#090a0a",
                  },
                },
              }}
            >
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme={mode ? "dark" : "light"}
                inlineCollapsed={collapsed}
                items={items}
                onClick={(e)=>{handleitem(e.key)}}
                style={{
                  background: mode ? "#1f1f1f" : "white",
                  color: mode ? "white" : "black",
                  minHeight: "645px",
                 
                }}
              />
            </ConfigProvider>
          </div>
        </aside>

        <main style={{width:"100%"}} className={`${mode?"bg-black":'bg-white'} p-6`}>
        {
          handlekey === "2"?<Introduction/>:''
         }
         {
          handlekey === "3"?<Guide/>:''
         }
         {
          handlekey === "6"?<R404/>:''
         }
         {
          handlekey === "5"?<Routepermission/>:''
         }
        </main>
      </section>
    </div>
  );
};
export default Header;


