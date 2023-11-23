
import React from 'react';
import { Form } from 'antd';
import MyformItem from '../form-items';

const BaseForm = (props) => {
 
  const { options, children, ...rest } = props;


  return (
    <Form {...rest}>
      {options?.map((option, index) => (
        <MyformItem key={index} {...option} />
      ))}
      {children}
    </Form>
  );
};

const MyForm = Object.assign(BaseForm, Form, { Item: MyformItem });

export default MyForm;