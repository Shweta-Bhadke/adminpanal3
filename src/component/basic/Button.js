import React from 'react';
import { Button } from 'antd';

const BaseButton = (props) => {
  return <Button {...props} />;
};

const MyButton = Object.assign(Button, BaseButton);

export default MyButton;
