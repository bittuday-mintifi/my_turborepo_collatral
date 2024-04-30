import React from 'react';
import { Table } from 'antd';
import "./globals.css";


interface DataItem {
    key: string;
    date: string;
    descriptions: string;
    debit: string;
    credit: string;
    remarks: string;
  }

const MintifiTable: React.FC = ({ dataSource, columns } :DataItem) => {
    return (
        <Table dataSource={dataSource} columns={columns}/>
    )
}
  export default MintifiTable;
