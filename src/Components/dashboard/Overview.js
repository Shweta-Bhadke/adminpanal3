import React, { useState, useEffect } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Progress, Row, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip as RTooltip, XAxis,YAxis,CartesianGrid,Legend } from 'recharts';
import { Button } from "antd"
import { useTranslation } from 'react-i18next';



import { translatefun } from '../translatefn';

import { dashboarden } from '../../locals/en/dashboard';
import { dashboardchi } from '../../locals/chi/dashboard';
import { TramSharp } from '@mui/icons-material';

const data = new Array(14).fill(null).map((_, index) => ({
  name: dayjs().add(index, 'day').format('YYYY-MM-DD'),
  number: Math.floor(Math.random() * 8 + 1),
}));




console.log(data);

const wrapperCol = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};


const ColCard = ({ metaName, metaCount, body, footer, loading }) => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <Col {...wrapperCol} >
      <Card loading={loading} bordered={false}  className={`${mode?'bg-[#1f1f1f] text-white':'bg-white '}`} style={{minHeight:"220px"}}>
        <div  >
        <div className=' flex justify-between'>
          <div className=' text-sm'>{metaName}</div>
          <Tooltip title="Introduce">
            <InfoCircleOutlined />
          </Tooltip>
          </div>
          <div className=' text-3xl pt-2 pr-2 pb-5'>{metaCount}</div>
         
        </div>
        <div>{body}</div>
        <div>{footer}</div>
      </Card>
    </Col>
  );
};

const Trend = ({ wow, dod }) => {
  const [translate,settranslate] = useState("en")
  
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(dashboarden,dashboardchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])
  
  return (
  
    <div className='flex space-x-9 text-sm '>
      <div className=' space-x-2'>
        <span>{translate.wow}</span>
        <span className=' text-black'>{wow}</span>
        <span style={{color:"red"}}>▲</span>
      </div>
      <div  className=' space-x-2 mb-3 '>
        <span>{translate.dod}</span>
      
        <span className=' text-black'>{dod}</span>
        <span style={{color:"green"}}>▼</span>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => (
  active && (
    <div className=' bg-white text-black p-1 border-[2px] rounded-md'>
      <span>
        <Badge color={payload[0].fill} /> {label} : {payload[0].value}
      </span>
    </div>
  )
);

const Field = ({ name, number }) => (
  <div className=' pt-2 space-x-3 text-sm ' >
    <span>{name}</span>
    <span className=' text-black'>{number} </span>
  </div>
);

const Overview = ({ loading }) => {
  const [translate,settranslate] = useState("en")
  
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(dashboarden,dashboardchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])
  
  return (
    <Row gutter={[12, 12]} >
      <ColCard
        loading={loading}
        metaName={translate.total}
        metaCount="¥ 126,560"
        body={<div className=' border-b-[1px] border-gray-700 pb-5'><Trend wow="12%" dod="12%"/></div>}
        
        footer={<Field name={translate.daily} number="￥12,423" />}
       />
       <ColCard
        loading={loading}
        metaName={translate.visit}
        metaCount="8846"
        body={
          <div className=' border-b-[1px] border-gray-700'>
           <ResponsiveContainer >
            <AreaChart
            // width={600}
            // height={50}
            data={data}
          >
            <XAxis dataKey="name"  hide/>
            
            <RTooltip content={<CustomTooltip />} />
            <Area dataKey="number" strokeOpacity={0} type="monotone"  fill="#8E65D3"/>
            
          </AreaChart>
          </ResponsiveContainer>
          </div>
        }
        footer={<Field name={translate.daily} number="1234" />}
      />
      
      <ColCard
        loading={loading}
        metaName={translate.payment}
        metaCount="6560"
        body={
          <div className=' border-b-[1px] border-gray-700'>
            <ResponsiveContainer  height={50}>
            <BarChart  data={data}>
            <XAxis dataKey="name" hide/>
            <RTooltip content={<CustomTooltip />} />
            <Bar dataKey="number"  strokeOpacity={0} barSize={10} fill="#3B80D9"/>
            </BarChart>
            </ResponsiveContainer>
            </div>
        }
        footer={<Field name={translate.conversion} number="60%" />}
      />
      
      <ColCard
        loading={loading}
        metaName={translate.operation}
        metaCount="8846"
        body={  <div className=' border-b-[1px] border-gray-700 pb-5'><Progress strokeColor="#58BFC1" percent={85} /></div>}
        footer={<div className='pt-2'><Trend style={{ position: 'inherit' }} wow="12%" dod="12%"/></div>}
      /> 
    </Row>
  );
};

export default Overview;
