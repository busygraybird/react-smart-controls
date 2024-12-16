import { action, makeObservable, observable } from 'mobx';

export class TextControlViewModel {
  @observable value = '';

  constructor(private readonly defaultValue = '') {
    makeObservable(this);
  }

  @action.bound
  onChange(value: string): void {
    this.value = value;
  }

  @action.bound
  clearValue(): void {
    this.value = '';
  }

  @action.bound
  resetValue(): void {
    this.value = this.defaultValue;
  }
}
