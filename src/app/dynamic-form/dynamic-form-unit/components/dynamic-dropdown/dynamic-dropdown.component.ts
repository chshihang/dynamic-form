import {Component, Input, OnInit} from '@angular/core';
import {Form} from '../../../Form';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-dropdown',
  templateUrl: './dynamic-dropdown.component.html',
  styleUrls: ['./dynamic-dropdown.component.scss']
})
export class DynamicDropdownComponent implements OnInit {

  @Input() form!: Form;
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
