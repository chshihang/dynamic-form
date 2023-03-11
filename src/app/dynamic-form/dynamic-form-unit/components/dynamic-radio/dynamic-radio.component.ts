import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../Form';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
  styleUrls: ['./dynamic-radio.component.scss']
})
export class DynamicRadioComponent implements OnInit {

  @Input() form!: Form;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
