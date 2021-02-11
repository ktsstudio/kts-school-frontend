const githubApi = (endpoint: string): string =>
  `https://api.github.com/${endpoint}`;

export const apiUrls = {
  github: {
    organizationRepos: (name: string): string =>
      githubApi(`orgs/${name}/repos`),
  },
};
