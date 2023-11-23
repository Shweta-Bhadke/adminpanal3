import React, { useEffect, useState } from 'react';
import { Badge, Card } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';



import { translatefun } from '../translatefn';

import { dashboarden } from '../../locals/en/dashboard';
import { dashboardchi } from '../../locals/chi/dashboard';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useDispatch, useSelector } from "react-redux";


const data = new Array(20).fill(null).map((_, index) => ({
  name: dayjs()
    .add(index * 30, 'minute')
    .format('HH:mm'),
  traffic: Math.floor(Math.random() * 120 + 1),
  payments: Math.floor(Math.random() * 120 + 1),
}));

const CustomTooltip = ({ active, payload, label }) => {
  const { mode } = useSelector((state) => state.darkMode);
  if (active) {
    const { value: value1, stroke: stroke1 ,name:name1} = payload[0];
    const { value: value2, stroke: stroke2 ,name:name2} = payload[1];
     console.log(name1,name2)
    return (
      <div  className={`${mode?'bg-[#1f1f1f] text-black':'bg-white'} bg-gray-100 p-2 border-[1px] rounded-md`}>
        <span >{label}</span>
        <ul>
          <li key="traffic">
           <Badge color={stroke1} />{name1}
            {value1} 
          </li>
          <li key="payments">
            <Badge color={stroke2} />{name2}
            {value2} 
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

const Timeline = ({ loading }) => {
  const [translate,settranslate] = useState("en")
  
  const lang = useSelector((state)=>state.handleLang.lang.newlang)
   useEffect(()=>{

    let translate12 = translatefun(dashboarden,dashboardchi, lang);
        console.log(translate12);
        settranslate(translate12);

   },[lang])
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <Card loading={loading} style={{ marginTop: 12 }} className={`${mode?'bg-[#1f1f1f] text-white':'bg-white'} border-none`}>
      <ResponsiveContainer height={400}>
        <LineChart data={data} syncId="anyId">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="traffic" stroke="#3F90F7" />
          <Line type="monotone" dataKey="payments" stroke="#61BE82" />
          <Brush dataKey="name" fill="#13c2c2" />
          <Legend
            verticalAlign="top"
            height={40}
        
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Timeline;
