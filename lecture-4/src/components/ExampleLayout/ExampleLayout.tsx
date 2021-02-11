import { Layout, Typography, Space, Card } from 'antd';
import * as React from 'react';
import './ExampleLayout.css';

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

const ExampleLayout: React.FC<Props> = ({
  title,
  subtitle,
  children,
}: Props) => {
  return (
    <Layout className="example-layout">
      <Layout.Content className="example-layout__content">
        <Space direction="vertical">
          <Typography.Title>{title}</Typography.Title>
          <Typography.Text type="secondary">{subtitle}</Typography.Text>
          <Card>{children}</Card>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default ExampleLayout;
