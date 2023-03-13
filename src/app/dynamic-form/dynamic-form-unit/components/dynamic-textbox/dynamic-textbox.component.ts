import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../Form';
import {FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-dynamic-textbox',
  templateUrl: './dynamic-textbox.component.html',
  styleUrls: ['./dynamic-textbox.component.scss']
})
export class DynamicTextboxComponent implements OnInit {

  @Input() form!: Form;
  formGroup!: FormGroup;

  constructor(private fgDirective: FormGroupDirective) { }

  ngOnInit(): void {
    this.formGroup = this.fgDirective.control;
  }

}
