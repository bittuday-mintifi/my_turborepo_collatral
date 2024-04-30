// MintifiTable.tsx
import React from 'react';
import { Table } from 'antd';

interface DataType {
    key: string;
    CustId: string;
    LoanACNo: string;
    LoanAppId: string;
    CCAmount: string;
    CCPaid: string;
    CCUnpaid: string;
    TDS: string;
    InterestPosted: string;
}

interface MintifiTableProps {
  dataSource: DataType[];
  columns: any[]; // Adjust the type of columns as needed
}

const MintifiTable: React.FC<MintifiTableProps> = ({ dataSource, columns }) => {
  return (
    <Table dataSource={dataSource} columns={columns} className='p-4' />
  );
};

export default MintifiTable;
