import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../Form';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss']
})
export class DynamicCheckboxComponent implements OnInit {

  @Input() form!: Form;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
