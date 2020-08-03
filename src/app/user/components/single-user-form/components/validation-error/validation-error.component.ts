import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent  {
  @Input('label') label: string
  @Input('error') error: ValidationErrors
  constructor() { }
}
