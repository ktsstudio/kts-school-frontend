import * as React from 'react';
import { Button as AntdButton } from 'antd';

type Props = {
    children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
    return <AntdButton>{children}</AntdButton>;
};

export default Button;
