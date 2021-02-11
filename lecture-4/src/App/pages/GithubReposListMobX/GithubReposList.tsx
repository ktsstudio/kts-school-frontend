import { Space, Input } from 'antd';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

import ExampleLayout from '@components/ExampleLayout';
import RepoCard from '@components/RepoCard';
import GithubReposStore from '@store/GithubReposStore';
import { log } from '@utils/log';
import { Meta } from '@utils/meta';
import { useAsync } from '@utils/useAsync';
import { useLocalStore } from '@utils/useLocal';

const ObserverRepoCard = observer(RepoCard);

const GithubReposList: React.FC = () => {
  log('GithubReposList render');

  const [value, setValue] = React.useState('');

  const store = useLocalStore(() => new GithubReposStore());

  useAsync(store.fetch, []);

  return (
    <ExampleLayout
      title="4. Список репозиториев KTS Studio c MobX"
      subtitle="Запрашиваем данные из API Github"
    >
      {store.meta === Meta.loading && <RepoCard loading />}
      <Space direction="vertical">
        <Input
          placeholder="Инпут для демонстрации перерендера и мемоизации computed"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {store.repos.map((repo) => (
          <ObserverRepoCard key={repo.id} repo={repo} />
        ))}
      </Space>
    </ExampleLayout>
  );
};

export default observer(GithubReposList);
