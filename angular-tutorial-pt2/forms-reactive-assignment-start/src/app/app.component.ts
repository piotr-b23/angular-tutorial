import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,[Validators.required, this.invalidProjectName.bind(this)],this.asyncInvalidProjectName),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'status': new FormControl('critical')
      
      
    })
  }

  invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'test') {
      return {'invalidProjectName': true};
    } else {
      return null;
    }
  }

  asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (control.value === 'tesa') {
          resolve({'invalidProjectNameAsync': true});
        } else {
          resolve(null);
        }
      },2000)
    })
    return promise;
  }


  onSubmit(){
    console.log(this.projectForm.value);
  }

}
