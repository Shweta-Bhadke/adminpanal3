import React, { useState, useEffect } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Progress, Row, Tooltip } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip as RTooltip, XAxis,YAxis,CartesianGrid,Legend } from 'recharts';


const data = new Array(14).fill(null).map((_, index) => ({
  name: dayjs().add(index, 'day').format('YYYY-MM-DD'),
  number: Math.floor(Math.random() * 8 + 1),
}));

const data1 = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]


console.log(data);

const wrapperCol = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};
const wrapperCol1 = {
  
};
const ColCard = ({ metaName, metaCount, body, footer, loading }) => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <Col {...wrapperCol} >
      <Card loading={loading} bordered={false}  className={`${mode?'bg-[#1f1f1f] text-white':'bg-white'}`} style={{minHeight:"220px"}}>
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
  return (
    <div className='flex space-x-9 text-sm '>
      <div className=' space-x-2'>
        <span>WoW Change</span>
        <span className=' text-black'>{wow}</span>
        <span style={{color:"red"}}>▲</span>
      </div>
      <div  className=' space-x-2 mb-3 '>
        <span>DOD Change</span>
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

  return (
    <Row gutter={[12, 12]} >
      <ColCard
        loading={loading}
        metaName="Total Sales"
        metaCount="¥ 126,560"
        body={<div className=' border-b-[1px] border-gray-700 pb-5'><Trend wow="12%" dod="12%"/></div>}
        
        footer={<Field name="Daily Sales" number="￥12,423" />}
       />
       <ColCard
        loading={loading}
        metaName="Visits"
        metaCount="8846"
        body={
          <div className=' border-b-[1px] border-gray-700'>
            <AreaChart
            width={600}
            height={50}
            data={data}
          >
            <XAxis dataKey="name"  hide/>
            
            <RTooltip content={<CustomTooltip />} />
            <Area dataKey="number" strokeOpacity={0} type="monotone"  fill="#8E65D3"/>
            
          </AreaChart>
          </div>
        }
        footer={<Field name="Daily Sales" number="1234" />}
      />
      
      <ColCard
        loading={loading}
        metaName="Payments"
        metaCount="6560"
        body={
          <div className=' border-b-[1px] border-gray-700'>
            <BarChart width={600} height={50} data={data}>
            <XAxis dataKey="name" hide/>
            <RTooltip content={<CustomTooltip />} />
            <Bar dataKey="number"  strokeOpacity={0} barSize={10} fill="#3B80D9"/>
            </BarChart>
            </div>
        }
        footer={<Field name="Conversion Rate" number="60%" />}
      />
      
      <ColCard
        loading={loading}
        metaName="Operational Effect"
        metaCount="8846"
        body={  <div className=' border-b-[1px] border-gray-700 pb-5'><Progress strokeColor="#58BFC1" percent={85} /></div>}
        footer={<div className='pt-2'><Trend style={{ position: 'inherit' }} wow="12%" dod="12%"/></div>}
      /> 
    </Row>
  );
};

export default Overview;
