import * as React from 'react';

export const useLocal = <T>(creator: () => T): T => {
  const container = React.useRef<T | null>(null);

  if (container.current === null) {
    container.current = creator();
  }

  return container.current;
};

export interface ILocalStore {
  destroy(): void;
}

export const useLocalStore = <T extends ILocalStore>(creator: () => T): T => {
  const store = useLocal(creator);

  React.useEffect(() => {
    return () => store.destroy();
  }, []);

  return store;
};
