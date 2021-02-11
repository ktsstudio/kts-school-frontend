import { Typography, Button, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import ExampleLayout from '@components/ExampleLayout';
import ObservableCounterStore from '@store/MyCounterStore';
import numberCStore from '@store/NumberCStore';
import { useLocal } from '@utils/useLocal';

const ObsevableCounter = () => {
  const store = useLocal(() => new ObservableCounterStore(numberCStore));

  return (
    <ExampleLayout
      title="2. Простой счётчик c MobX"
      subtitle="Подключаем простой стор"
    >
      <Space>
        <Typography.Text>Нажали {store.value} раз(a)</Typography.Text>
        <Button onClick={store.increment}>Нажать</Button>
      </Space>
    </ExampleLayout>
  );
};

export default observer(ObsevableCounter);
