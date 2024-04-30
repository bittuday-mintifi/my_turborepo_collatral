import { MintifiAccountCollapsible, MintifiCollapse, MintifiTable } from '@repo/ui/antd';
import { Card, CollapseProps, Row } from 'antd';
import CCSnapshot from './cc-snapshot';

interface DataItem {
  key: string;
  date: string;
  descriptions: string;
  debit: string;
  credit: string;
  remarks: string;
}

const Homepage = () => {

  const dataSource: DataItem[] = [
    {
      key: '1',
      date: '21/05/2023',
      descriptions: 'Lorem ipsum dolor sit amet. Qui rerum repellendus in omnis tempore sit totam cumque. Id pariatur necessitatibus ad',
      debit: '₹ 5,21,886',
      credit: '₹ 21,941',
      remarks: 'Lorem ipsum dolor sit amet. Qui rerum repellendus in omnis tempore sit totam cumque. Id pariatur necessitatibus ad',
    }
  ];
  
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: 'Descriptions',
      dataIndex: 'descriptions',
      key: 'descriptions',
      width: '30%',
      align: 'center'
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      key: 'debit',
      align: 'center'
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      key: 'credit',
      align: 'center'
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
      width: '30%',
      align: 'center'
    },
  ];

  const items1: CollapseProps['items'] = [
    {
      key: '1',
      label: <div className='text-[#000000] text-start'><span>OD Id: 52658</span><span>&nbsp;|&nbsp;</span><span>Nippon Paint India Pvt Ltd</span></div>,
      children: 
      <>
        <div className='p-1 text-start'>
          <span className='font-[457] text-[15px] leading-[19px]'>Outstanding Amount:</span><span className='font-[656] text-[15px] leading-[19px]'>₹ 40,00,000</span>
        </div>
        <div className='px-1 py-2 text-start'>  
          <span className='font-[457] text-[15px] leading-[19px]'>CC Account No:</span><span className='font-[656] text-[15px] leading-[19px]'>CC124567</span>
        </div>
        <CCSnapshot />
      </>,
    },
  ];

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Hide CC Ledger',
      children: 
      <>
        <MintifiTable 
          dataSource={dataSource}
          columns={columns}
        />
        <MintifiAccountCollapsible items={items1}/>
      </>,
    },
  ];

  return (
    <div className='p-4'>
      <div className='font-[656] text-[14px] leading-[24px] py-1'>
        <span className='text-[#666BA5] font-[457]'>Showing CC details for Cust Id:</span>
        <span>52658</span> 
      </div>
      <div className='font-[656] text-[12px] leading-[19px] text-[#03064D] py-1'>
        Overall CC Snapshot
      </div>
      <CCSnapshot />
      <MintifiCollapse items={items}/>
    </div>
  );
};

export default Homepage;
