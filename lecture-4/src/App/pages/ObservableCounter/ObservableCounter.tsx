import { Typography, Button, Space } from 'antd';
import * as React from 'react';

import ExampleLayout from '@components/ExampleLayout';

const ObsevableCounter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => setCount((val) => val + 1), []);

  return (
    <ExampleLayout
      title="1. Простой счётчик без MobX"
      subtitle="Подключаем простой стор"
    >
      <Space>
        <Typography.Text>Нажали {count} раз(a)</Typography.Text>
        <Button onClick={increment}>Нажать</Button>
      </Space>
    </ExampleLayout>
  );
};

export default ObsevableCounter;
