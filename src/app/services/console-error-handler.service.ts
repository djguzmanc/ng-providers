import { Injectable } from '@angular/core';
import { ErrorUiHandler } from '../error/error-ui-handler.config';

@Injectable({
  providedIn: 'root'
})
export class ConsoleErrorHandlerService implements ErrorUiHandler {
  showError(error: string): void {
    console.error(error);
  }
}
