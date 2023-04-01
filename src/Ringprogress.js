import React from 'react';
import "./css/ant_design.css";
import { Progress, Space } from 'antd';

const Ringprogress = () => (
  <>
    
    <Space wrap>
      <Progress type="circle" percent={90} className="ant_design" strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
      
    </Space>
  </>
);

export default Ringprogress;