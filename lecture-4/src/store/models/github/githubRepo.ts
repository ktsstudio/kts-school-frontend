import { GithubOwnerModel } from './githubOwner';

export type GithubRepoModel = {
  id: number;
  name: string;
  description: string;
  htmlUrl: string;
  pushedAt: Date;
  owner: GithubOwnerModel;
};
