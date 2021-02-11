import { action, makeObservable, observable } from 'mobx';

import { NumberCStore } from '@store/NumberCStore';
import { ILocalStore } from '@utils/useLocal';

export default class MyCounterStore implements ILocalStore {
  value: number;
  _numberCStore: NumberCStore;

  constructor(numberCStore: NumberCStore) {
    this._numberCStore = numberCStore;
    this.value = this._numberCStore.c;

    makeObservable(this, {
      value: observable,
      increment: action.bound,
    });
  }

  increment(): void {
    this.value++;
  }

  destroy(): void {
    // Здесь должна быть логика destroy
  }
}
