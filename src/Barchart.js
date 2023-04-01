import React from 'react';
import { Progress, Space } from 'antd';
import "./css/barchart.css";

const Barchart= () => (
  <Space wrap><div className='progress'>
    <Progress  type="dashboard" percent={27} />
    <div className='data'><span>92,980</span>
    <p>Active users</p></div></div>
    <Progress className='progress1' type="dashboard" percent={67} gapDegree={30} />
    <div className='data'><span>22,022</span>
    <p>New users</p></div>
  </Space>
);

export default Barchart;