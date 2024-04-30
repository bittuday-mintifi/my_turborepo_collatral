import React from 'react';
import { Collapse, CollapseProps } from 'antd';
import "./globals.css";

interface DataItem {
    key: string;
    date: string;
    descriptions: string;
    debit: string;
    credit: string;
    remarks: string;
  }
  
  interface ItemType {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
  }

const MintifiCollapse: React.FC = ({ items } :CollapseProps) => <Collapse accordion items={items} className='border-none bg-[#B2B5FD] rounded-none' />;

export default MintifiCollapse;
