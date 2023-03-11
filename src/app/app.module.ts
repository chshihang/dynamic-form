import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DynamicFormUnitComponent } from './dynamic-form/dynamic-form-unit/dynamic-form-unit.component';
import { DynamicTextboxComponent } from './dynamic-form/dynamic-form-unit/components/dynamic-textbox/dynamic-textbox.component';
import { DynamicDropdownComponent } from './dynamic-form/dynamic-form-unit/components/dynamic-dropdown/dynamic-dropdown.component';
import { DynamicCheckboxComponent } from './dynamic-form/dynamic-form-unit/components/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './dynamic-form/dynamic-form-unit/components/dynamic-radio/dynamic-radio.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormUnitComponent,
    DynamicTextboxComponent,
    DynamicDropdownComponent,
    DynamicCheckboxComponent,
    DynamicRadioComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
