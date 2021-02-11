import { PaperClipOutlined } from '@ant-design/icons';
import { Card, Popover, Avatar, Skeleton } from 'antd';
import * as React from 'react';

import { GithubRepoModel } from '@store/models';
import { formatDateDDMMYYYY } from '@utils/formatDateDDMMYYYY';

type Props = {
  repo?: GithubRepoModel;
  loading?: boolean;
};

const RepoCard: React.FC<Props> = ({ repo, loading = false }: Props) => {
  const actions = React.useMemo(
    () =>
      repo
        ? [
            <a
              key="go"
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PaperClipOutlined /> Перейти
            </a>,
          ]
        : [],
    [repo]
  );

  return (
    <Card hoverable actions={actions}>
      <Skeleton loading={loading} avatar active>
        <Card.Meta
          avatar={
            <Popover title={repo?.owner?.login}>
              <Avatar src={repo?.owner?.avatarUrl} />
            </Popover>
          }
          title={repo?.name}
          description={
            repo && (
              <>
                {repo.description}
                <br />
                -----
                <br />
                {formatDateDDMMYYYY(repo.pushedAt)}
              </>
            )
          }
        />
      </Skeleton>
    </Card>
  );
};

export default RepoCard;
