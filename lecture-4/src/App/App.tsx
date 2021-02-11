import * as React from 'react';

// eslint-disable-next-line
import ObservableCounter from './pages/ObservableCounter';
// eslint-disable-next-line
import ObservableCounterMobX from './pages/ObservableCounterMobX';
// eslint-disable-next-line
import GithubReposList from './pages/GithubReposList';
// eslint-disable-next-line
import GithubReposListMobX from './pages/GithubReposListMobX';

const App: React.FC = () => {
  return (
    <>
      {/* <ObservableCounter /> */}
      {/* <ObservableCounterMobX /> */}
      {/* <GithubReposList /> */}
      <GithubReposListMobX />
    </>
  );
};

export default App;
