import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Form} from '../Form';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {

  formGroup!: FormGroup
  @Input() forms: Form[]|null = [];

  constructor() { }

  ngOnInit(): void {
    this.formGroup = this.toFormGroup(this.forms as Form[]);
  }

  onSubmit(): void {
    console.log('onSubmit', this.formGroup.value);
  }

  toFormGroup(forms: Form[] ) {
    const group: any = {};

    forms.forEach(form => {
      group[form.key] = form.rule.required ?
        new FormControl(form.value || '', Validators.required):
        new FormControl(form.value || '');
    });
    return new FormGroup(group);
  }

}
