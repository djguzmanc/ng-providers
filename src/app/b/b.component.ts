import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { COMPONENT_NAME } from '../injectors/custom-injectors';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  @Input()
  name: string;

  constructor(
    @Inject(COMPONENT_NAME)
    @Optional()
    public providerName: string
  ) { }

  ngOnInit(): void {
  }

  changeName(): void {
    this.name = 'Tu mama';
  }

}
