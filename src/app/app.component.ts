import { Component } from '@angular/core';
import {FormService} from './dynamic-form/service/form.service';
import {Observable} from 'rxjs';
import {Form} from './dynamic-form/Form';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>请输入相关信息</h2>
      <app-dynamic-form [forms]="forms$ | async"></app-dynamic-form>
    </div>`,
})
export class AppComponent {
  forms$: Observable<Form[]>;

  constructor(private formService: FormService) {
    this.forms$ = this.formService.getForms();
  }
}
