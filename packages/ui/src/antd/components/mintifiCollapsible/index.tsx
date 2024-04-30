import React from 'react';
import { Collapse, CollapseProps } from 'antd';
import "./globals.css";

const MintifiCollapse: React.FC = ({ items } :CollapseProps) => <Collapse className='p-0 border-none bg-[#ECEDEF] text-end ant-collapse-icon-position-end' accordion items={items} />;

export default MintifiCollapse;
