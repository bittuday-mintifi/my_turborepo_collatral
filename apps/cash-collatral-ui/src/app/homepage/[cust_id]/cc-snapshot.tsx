// import { MintifiAccountCollapsible, MintifiCollapse, MintifiTable } from '@repo/ui/antd';
import { Card, CollapseProps, Row } from 'antd';


const CCSnapshot = () => {

  return (
    <div className='p-2'>
      <div className='grid grid-cols-6 gap-4 py-4'>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            CC Amount
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            CC Paid
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            CC Unpaid
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            Interest Accrued
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            Interest Posted
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
        <Card className='text-center rounded-none bg-[#F5F5F7]'>
          <div className='font-[556] text-[14px] leading-[17px] text-[#666BA5] my-2'>
            TDS
          </div>
          <div className='font-[790] text-[16px] leading-[19px] text-[#03064D] my-2'>
            ₹ 20,00,000
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CCSnapshot;
