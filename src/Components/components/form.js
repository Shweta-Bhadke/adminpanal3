
import React from 'react';
import MyButton from '../../component/basic/Button';
import MyForm from '../../component/cors/forms';
import {  useSelector } from "react-redux";


const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormPage = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  const { mode } = useSelector((state) => state.darkMode);
  
  return (
   
    
<MyForm onFinish={onFinish}  >
      <MyForm.Item label={<div className={`${mode?'text-white':''}`} >测试</div>}  required name="text" type="input"
       samelabel='测试' />
      <MyForm.Item {...tailLayout} >
        
        <MyButton  htmlType="submit" className={` bg-[#80e8dc] border-none ${mode?' text-white':''} `}>
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>

    
  );
};

export default FormPage;