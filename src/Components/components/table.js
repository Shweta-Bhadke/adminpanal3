import React from 'react';
import { Space, Table, Tag ,ConfigProvider,Pagination} from 'antd';
import { useDispatch, useSelector } from "react-redux";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    firstName: 'Joe' + index,
    lastName: 'Black' + index,
    age: 32 + index,
    address: 'Sidney No. 1 Lake Park' + index,
    tags: ['cool', 'teacher'],
  });
});

const Table1 = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const configprovider = {
    defaultPageSize:5,
    theme: {
      components: {
        Pagination: {
          itemActiveBg:"red",
          itemBg:"red",
          itemInputBg:"red"
        },
      },
    },
  }
  
  return(


    <ConfigProvider
  theme={{
    components: {
      Table: {
        colorBgContainer:mode ? "#1f1f1f" : '',
        colorTextHeading:mode?"white":'',
        colorText:mode?"white":'',
        headerColor:mode?"white":'',
        headerBg:mode?"#363535":'',
        colorBorderSecondary:mode?"#4d4a4a":'#e6e1e1',
        padding:10,
        rowHoverBg:mode?"#363535":"",
      },
      
    },
  }}
>
<div>
  <Table dataSource={data} scroll={{
       
        y: 500,
      }}
     pagination={<ConfigProvider {...configprovider} />}>
  <ColumnGroup title="Name" >
    <Column title="First Name" dataIndex="firstName" key="firstName" />
    <Column title="Last Name" dataIndex="lastName" key="lastName"/>
  </ColumnGroup>
  <Column title="Age" dataIndex="age" key="age" />
  <Column title="Address" dataIndex="address" key="address" />
  <Column
    title="Tags"
    dataIndex="tags"
    key="tags"
  
    render={(tags) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag} >
            {tag}
          </Tag>
        ))}
      </>
    )}
    />
  <Column
    title="Action"
    key="action"
    render={(_, record) => (
      <Space size="middle">
        <a>Invite {record.lastName}</a>
        <a>Delete</a>
      </Space>
    )}
     />
</Table>

</div>
</ConfigProvider>
 

  )
 
};
export default Table1;