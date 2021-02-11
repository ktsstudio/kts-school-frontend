import { GithubOwnerModel } from './githubOwner';

export type GithubOwnerApiModel = {
  id: number;
  login: string;
  avatar_url: string;
};

export const normalizeGithubOwnerModel = (
  raw: GithubOwnerApiModel
): GithubOwnerModel => ({
  id: raw.id,
  login: raw.login,
  avatarUrl: raw.avatar_url,
});
