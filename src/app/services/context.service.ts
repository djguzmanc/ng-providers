import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, Type } from '@angular/core';
import { AppComponent } from '../app.component';

@Injectable()
export class ContextService {

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  attachNewView<C>(component: Type<C>): void {
    let modalDiv = document.querySelector('#modal-container');
    if (!modalDiv) {
      modalDiv = document.createElement('div');
      modalDiv.id = 'modal-container';
      document.body.appendChild(modalDiv);
    }

    const cf = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = cf.create(this.injector, [], modalDiv);
    this.appRef.attachView(componentRef.hostView);
  }
}
