import { action, makeObservable, observable } from 'mobx';

export class NumberControlViewModel {
  @observable value = '';
  @observable error: string | null = null;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  private setError(error: string | null): void {
    this.error = error;
  }

  @action.bound
  onChange(value: string): void {
    if (value !== this.value) {
      this.value = value;
      this.setError(null);
    }
  }

  @action.bound
  showNumber(): void {
    if (this.value === '') {
      return;
    }

    try {
      const parsedNumber = Number(this.value);

      if (!Number.isNaN(parsedNumber)) {
        alert(parsedNumber);
      } else {
        this.setError('This is not number');
      }
    } catch (e) {
      this.setError('Failed to parse number');
    }
  }

  @action.bound
  showCurrentValue(): void {
    alert(this.value);
  }
}
