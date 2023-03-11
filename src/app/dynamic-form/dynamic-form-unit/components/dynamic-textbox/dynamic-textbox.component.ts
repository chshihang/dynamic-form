import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../Form';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-textbox',
  templateUrl: './dynamic-textbox.component.html',
  styleUrls: ['./dynamic-textbox.component.scss']
})
export class DynamicTextboxComponent implements OnInit {

  @Input() form!: Form;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
