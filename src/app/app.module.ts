import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { ContextService } from './services/context.service';
import { RequestErrorModule } from './error/request-error.module';
import { AlertErrorHandlerService } from './services/alert-error-handler.service';
import { ConsoleErrorHandlerService } from './services/console-error-handler.service';
import { CustomDialogContainerComponent } from './custom-dialog-container/custom-dialog-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CustomDialogContainerComponent
  ],
  imports: [
    BrowserModule,
    RequestErrorModule.forRoot({
      // handler: ConsoleErrorHandlerService,
      handler: AlertErrorHandlerService,
      usePrefix: 'SUFIX'
    })
  ],
  providers: [
    {
      provide: ContextService,
      useClass: ContextService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
