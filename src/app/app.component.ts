import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms'


@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  providers:[FormBuilder  ]
  templateUrl: './app.component.html',
})
export class AppComponent  {

  name = 'Angular';
  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['', [Validators.minLength(2),Validators.required]],
        last: 'Drew',
      }),
      email: '',
    });
  }
}
