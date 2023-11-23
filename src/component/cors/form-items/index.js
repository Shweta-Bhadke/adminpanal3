
import React, { useMemo } from 'react';
import { Checkbox, DatePicker, Form, Input, InputNumber, Radio, Select, Switch } from 'antd';
class ControlMap {
  constructor(props) {
    this.props = props;
  }

  get innerProps() {
    return this.props.innerProps;
  }

  input() {
    return React.createElement(Input, this.innerProps);
  }

  'input-number'() {
    return React.createElement(InputNumber, this.innerProps);
  }

  switch() {
    return React.createElement(Switch, this.innerProps);
  }

  'date-picker'() {
    return React.createElement(DatePicker, this.innerProps);
  }

  checkbox() {
    return React.createElement(Checkbox.Group, { children: this.props.children, options: this.props.options, ...this.innerProps });
  }

  radio() {
    return React.createElement(Radio.Group, { children: this.props.children, options: this.props.options, ...this.innerProps });
  }

  select() {
    return React.createElement(Select, { children: this.props.children, options: this.props.options, ...this.innerProps });
  }
}



  

  const MyformItem = (props) => {
   
  
    const { type, required, rules: userRules, ...restProps } = props;
  console.log(props)
 

    const rules = useMemo(() => {
      if (userRules) return userRules;
  
      if (required) {
        if (typeof required === 'boolean') {
          return [{ required: true, message: `请输入${props.samelabel}` }];
        } else if (typeof required === 'string') {
          return [{ required: true, message: required }];
        }
      }
    }, [required, userRules,props.samelabel
    ]);
  
    const controlMap = new ControlMap(props);
  
    return (
      <Form.Item {...restProps} rules={rules}>
        {type ? controlMap[type]() : props.children}
      </Form.Item>
    );
  };
 
  


export default MyformItem