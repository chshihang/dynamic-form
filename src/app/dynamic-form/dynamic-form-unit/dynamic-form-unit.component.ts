import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Form} from '../Form';

@Component({
  selector: 'app-dynamic-form-unit',
  templateUrl: './dynamic-form-unit.component.html',
})
export class DynamicFormUnitComponent implements OnInit {

  @Input() formGroup!: FormGroup;
  @Input() form!: Form;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit', this.formGroup);
  }

  get isValid() { return this.formGroup.controls[this.form.key].valid; }
}
