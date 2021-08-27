import { Injectable } from '@angular/core';
import { ErrorUiConfig, ErrorUiHandler } from './error-ui-handler.config';

@Injectable()
export class ErrorService {

  constructor(
    private config: ErrorUiConfig,
    private errorPresenter: ErrorUiHandler
  ) { }

  somethingWrongHappened(error: string): void {
    if (this.config.usePrefix) {
      error = `${this.config.usePrefix} ${error}`;
    }

    this.errorPresenter.showError(error);
  }

}