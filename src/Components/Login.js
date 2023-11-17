import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { Checkbox } from 'antd';
import { ConfigProvider } from 'antd';
import Link from 'antd/es/typography/Link';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../Store/Features/login';

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};


function Login() {
  const [user, setuser] = useState("jhon");
  const [pass, setpass] = useState("12345");
  const [validate, setvalidate] = useState(true);
  const [validatepass, setvalidatepass] = useState(true);
  const [userer, setuserer] = useState("");
  const [passer, setpasser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(user);
  // console.log(pass);
  const dispatch = useDispatch();
  const lang = useSelector((state)=>state.login.login.checklogin)
  console.log(lang)
  const userfun = () => {
    if (user.trim() === "") {
      setvalidate(false);
      setuserer("please provide username");
    } else {
      setvalidate(true);
      setuserer("");
    }

   
  };

  const passfun = () =>{
 if (pass.trim() === "") {
    setvalidatepass(false);
    setpasser("please provide password");
  } else {
    setvalidatepass(true);
    setpasser("");
  }
  }
 

  async function handlelogin(e) {
    e.preventDefault();
    if (validate && validatepass) {
      dispatch(setLogin({checklogin:true}))
      navigate('/', { state: { from: location }, replace: true });

    }
  }

  return (
    <div>
      <div className="flex justify-center items-center my-0 h-[100vh]">
        <section className=" w-[250px] flex justify-center flex-col space-y-2 p-4">
          <h1 className=' text-gray-200 font-bold text-xl text-center'>REACT ANTD ADMIN</h1>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  activeBg: "#0c0e12",
                  activeBorderColor: "#81d6cc",
                  hoverBorderColor: "#81d6cc",
                  activeShadow: "#81d6cc",
                  colorBgContainer: "#0c0e12",
                  colorBorder: "#0c0e12",
                  colorText: "#e1e3e8",
                },
                Checkbox: {
                  colorBgContainer: "#0c0e12",
                  colorBorder: "#0c0e12",
                  colorPrimaryBorder: "#81d6cc",
                },
                Button: {},
              },
            }}
          >
            <Input placeholder="Basic usage" onChange={(e) => setuser(e.target.value)} value={user} onKeyUp={userfun}/>
            <div className=' text-red-700 text-[0.9rem]'>{!validate ? userer : ''}</div>

            <Input.Password placeholder="input password" onChange={(e) => setpass(e.target.value)} value={pass} onKeyUp={passfun}/>
            <div className=' text-red-700 text-[0.9rem]'>{!validatepass ? passer : ''}</div>

            <Checkbox onChange={onChange}></Checkbox>
            <Button className='text-white' style={{ backgroundColor: "#81d6cc", border: "none" }} onClick={handlelogin}>
              Login
            </Button>
          </ConfigProvider>
        </section>
      </div>
    </div>
  );
}

export default Login;
