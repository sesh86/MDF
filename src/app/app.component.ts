import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  providers:[FormBuilder],
  templateUrl: './app.component.html',
})
export class AppComponent  {

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
