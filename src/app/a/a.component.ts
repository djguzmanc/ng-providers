import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { ContextService } from '../services/context.service';
import { ErrorService } from '../error/error.service';
import { BComponent } from '../b/b.component';
import { COMPONENT_NAME } from '../injectors/custom-injectors';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {

  list = [1, 2, 3, 4, 5];

  constructor(
    private context: ContextService,
    private errorHandler: ErrorService,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    const componentFactory = this.cfr.resolveComponentFactory(BComponent);
    const componentRef = this.vcr.createComponent(
      componentFactory,
      null,
      Injector.create({
        parent: this.vcr.injector,
        providers: [
          {
            provide: COMPONENT_NAME,
            useValue: 'From provider JUEPUTAAA'
          }
        ]
      })
    );
    componentRef.instance.name = 'Lazy';

    this.context.attachNewView(BComponent);
  }

  fakeError(): void {
    this.errorHandler.somethingWrongHappened('Las pelotas viejo :(');
  }

}
