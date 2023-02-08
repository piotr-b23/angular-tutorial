import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  singupForm: FormGroup;
  forbiddenUsernamesList = ['Chris', 'Anna'];

  ngOnInit(){
    this.singupForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.singupForm.valueChanges.subscribe((value)=> {
    //   console.log(value);
    // })

    this.singupForm.statusChanges.subscribe((value)=> {
      console.log(value);
    })
    this.singupForm.setValue({
      'userdata': {
        'username': 'max',
        'email': 'max@max.pl',
      },
      'gender': 'female',
      'hobbies': []
    });

    this.singupForm.patchValue({
      'userdata': {
        'username': 'anna'
      }
    })

  }

  getControls(){
    return (<FormArray>this.singupForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.singupForm.get('hobbies')).push(control)

  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernamesList.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve,reject)=> {
      setTimeout(()=> {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      },1000);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.singupForm);
    this.singupForm.reset({gender: 'male'});
  }
}
