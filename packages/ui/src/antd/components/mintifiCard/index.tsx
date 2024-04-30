import React, { ReactNode } from 'react';
import { Card, CardProps } from 'antd';

interface MyComponentProps extends CardProps {
  children: ReactNode;
}

const AntdCard: React.FC<MyComponentProps> = ({ children, ...props }) => {
  return <Card {...props}>{children}</Card>;
};

export default AntdCard;
