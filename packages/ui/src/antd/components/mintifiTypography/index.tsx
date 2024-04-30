import React, { ReactNode } from 'react';
import { Card, Typography, TypographyProps } from 'antd';

interface MyComponentProps extends TypographyProps {
  children: ReactNode;
}

const AntdTypogrphy: React.FC<MyComponentProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};

export default AntdTypogrphy;
