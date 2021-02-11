import { configure } from 'mobx';

// https://mobx.js.org/configuration.html

configure({
  useProxies: 'ifavailable',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
});
