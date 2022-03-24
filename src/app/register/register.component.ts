import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm:FormGroup;
  constructor() { 
    this.registerForm=new FormGroup({   
      fullName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      password2: new FormControl(null)
    }
    );
  }

  ngOnInit(): void {
  }
  onSubmitHandler(){
    alert("submitted")
    console.log(this.registerForm.value)
    if(this.registerForm.value.password !=this.registerForm.value.password2){
      alert("password mismatched")
      return;
    }
  }

}
