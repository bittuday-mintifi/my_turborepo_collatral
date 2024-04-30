import React, { ReactNode } from 'react';
import { Card, Flex, Row, Typography, TypographyProps } from 'antd';
import "./globals.css";

interface MyComponentProps {
  headerLHS: any;
  headerRHS: any;
  label: string;
  labelData: any,
  labelSVG: ReactNode,
  cardStyle: any
}

const MintifiHeaderCard : React.FC<MyComponentProps> = ({...props }) => {
  const { headerLHS, label, labelData, labelSVG, headerRHS, cardStyle } = props;
  return (
    <Card className={`text-black font-bold ${cardStyle}`}>
      <Card 
        className='border-none custom-card-body'
        title={
          <Flex justify="space-between" align='center'>
            <div className={`${headerLHS && headerLHS[1]}`}>
              {headerLHS && headerLHS[0]}
            </div>  
            <div>
              {headerRHS}
            </div> 
          </Flex>
        }
      >
        <Flex wrap="wrap" gap="small" justify="center" align='center'>
          {labelSVG}
          <span>
            {label}
          </span>
        </Flex>
        <div className={`text-center text-[30px] ${labelData && labelData[1]}`}>
          {labelData && labelData[0]}
        </div>
      </Card>
    </Card>
  )
};

export default MintifiHeaderCard;
