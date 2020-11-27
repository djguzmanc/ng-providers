import { Injectable } from '@angular/core';
import { ErrorUiHandler } from '../error/error-ui-handler.config';

@Injectable({
  providedIn: 'root'
})
export class AlertErrorHandlerService implements ErrorUiHandler {
  showError(error: string): void {
    alert(error);
  }
}
