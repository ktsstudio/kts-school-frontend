import { Space } from 'antd';
import * as React from 'react';

import ExampleLayout from '@components/ExampleLayout';
import RepoCard from '@components/RepoCard';
import { requestGithubRepos } from '@store/GithubReposStore/requestGithubRepos';
import { GithubRepoModel } from '@store/models';
import { linearizeCollection } from '@utils/collection';
import { Meta } from '@utils/meta';

const MemoRepoCard = React.memo(RepoCard);

const GithubReposList: React.FC = () => {
  const [meta, setMeta] = React.useState(Meta.initial);
  const [repos, setRepos] = React.useState<GithubRepoModel[]>([]);

  React.useEffect(() => {
    setMeta(Meta.loading);
    setRepos([]);

    requestGithubRepos('ktsstudio').then((respRepos) => {
      if (respRepos.isError) {
        setMeta(Meta.error);
        return;
      }

      setRepos(linearizeCollection(respRepos.data));
      setMeta(Meta.success);
    });
  }, []);

  return (
    <ExampleLayout
      title="3. Список репозиториев KTS Studio без MobX"
      subtitle="Запрашиваем данные из API Github"
    >
      {meta === Meta.error && 'АААА ВСЁ ПЛОХО'}
      {meta === Meta.loading && <RepoCard loading />}
      <Space direction="vertical">
        {repos.map((repo) => (
          <MemoRepoCard key={repo.id} repo={repo} />
        ))}
      </Space>
    </ExampleLayout>
  );
};

export default GithubReposList;
