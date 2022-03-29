import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm: FormGroup | any;

  get userName(){
    return this.registrationForm.get('userNamer');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder, private _registrationService : RegistrationService){}
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email:[''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails:this.fb.array([])
    }, {validator: PasswordValidator})
  
    this.registrationForm.get('subscribe')?.valueChanges
        .subscribe((checkedValue: any)=>{
          const email = this.registrationForm.get('email');
          if(checkedValue){
            email?.setValidators(Validators.required)
          }else{
            email?.clearValidators();
          }
          email?.updateValueAndValidity();
        })
  }


      /*registrationForm = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
        address: new FormControl({
          city: new FormControl(''),
          state: new FormControl(''),
          postalCode: new FormControl(''),
        })
      });*/

  loadApiData(){
    this.registrationForm.patchValue({
      userName: 'Alef',
      password: 'teste',
      confirmPassword: 'teste'
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
        .subscribe(
          response => console.log('Sucess!', response),
          error => console.log('Error', error),
        )
  }
}
