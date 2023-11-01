import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";//reactive form

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Form';
  //reactive form
  constructor(private fb : FormBuilder) { }

  //template form
  data : any = {
    firstname : '',
    lastName : '',
    phone : '',
    email : '',
  }
  onsubmit(){
    alert(JSON.stringify(this.data))
          
  }
  //Reactive Form
  submit : boolean = false

  forms = this.fb.group({ 
    firstname : ['',Validators.required],
    lastname : ['',Validators.required],
    Phone : ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    Email : ['',[Validators.required,Validators.email]],
  })
  get f() {
    return this.forms.controls
  }
  onclick(){
    this.submit = true
    console.log(this.f);
    
  }
  
}
