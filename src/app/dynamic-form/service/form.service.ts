import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Form} from '../Form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  getForms(): Observable<Form[]> {
    const forms: Form[] = [

      new Form({
        key: 'age',
        label: '年龄',
        order: 3,
        controlType: 'dropdown',
        options: [
          {key: '17', value: '18'},
          {key: '18', value: '19'},
          {key: '19', value: '20'},
        ],
        rule: {
          required: true
        }
      }),

      new Form({
        key: 'name',
        label: '姓名',
        order: 1,
        controlType: 'textbox',
        type: 'text',
        rule: {
          required: true
        }
      }),

      new Form({
        key: 'phone',
        label: '手机号',
        order: 2,
        controlType: 'textbox',
        type: 'number',
      })
    ];
    return of(forms.sort((a, b) => a.order - b.order));
  }
}
