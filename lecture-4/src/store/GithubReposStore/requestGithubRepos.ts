import axios from 'axios';

import { apiUrls } from '@config/apiUrls';
import {
  GithubRepoModel,
  normalizeGithubReposToCollectoin,
} from '@store/models';
import { ApiResp } from '@utils/apiTypes';
import { CollectionT } from '@utils/collection';
import { log } from '@utils/log';

export const requestGithubRepos = async (
  organization: string
): Promise<ApiResp<CollectionT<number, GithubRepoModel>>> => {
  try {
    const response = await axios(
      apiUrls.github.organizationRepos(organization)
    );
    return {
      isError: false,
      data: normalizeGithubReposToCollectoin(response.data),
    };
  } catch (e) {
    log(e);
    return {
      isError: true,
      data: null,
    };
  }
};
