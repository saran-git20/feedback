import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm:FormGroup;
    constructor(public router:Router) { 
      this.contactForm=new FormGroup({
        email: new FormControl(null),
        gender: new FormControl(null),
        nationality: new FormControl(null),
        number: new FormControl(null),
        box: new FormControl(null),
        country: new FormControl(null),
      })
    }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe((obj)=>{
      console.log(obj.email);
      
    })
  }
  // whenSubmit(){
  //   // alert('submitted')
  //   console.log(this.contactForm.value)
  //   this.contactForm.setValue({
  //     email: '',
  //     gender: '',
  //     nationality: '',
  //     number:'',
  //     box:'',
  //     country:''
  //   })
  // }

  whenSubmit(){
    // alert('submitted')
    console.log(this.contactForm.value)
    this.contactForm.patchValue({
      email: this.contactForm.value.email,
      gender: this.contactForm.value.gender,
      nationality: '',
      number:'',
      box:'',
      country:''
    });
    this.contactForm.reset({
      email: "gunal@gmail.com"
    })
  }
 
}

