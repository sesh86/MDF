import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  providers:[FormBuilder],
  templateUrl: './app.component.html',
})
export class AppComponent  {

  userForm1=new FormGroup({name: new FormControl('',[Validators.required,Validators.minLength(4)]),
  email:new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])  });

  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
          name: fb.group({
                          first: ['', [Validators.minLength(4),Validators.required]],
                          last: ['',[Validators.minLength(4),Validators.required]]
                        }),
          email: '',
    });
  }
}
