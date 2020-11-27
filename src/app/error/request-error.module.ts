import { ModuleWithProviders, NgModule } from '@angular/core';
import { ErrorUiConfig, ErrorUiHandler } from './error-ui-handler.config';

@NgModule()
export class RequestErrorModule {
  static forRoot(config: ErrorUiConfig): ModuleWithProviders<RequestErrorModule> {
    return {
      ngModule: RequestErrorModule,
      providers: [
        {
          provide: ErrorUiConfig,
          useValue: config
        },
        {
          provide: ErrorUiHandler,
          useClass: config.handler
        }
      ]
    };
  }
}
