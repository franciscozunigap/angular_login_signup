import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UsersService } from "../../services/users.service";

import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})

export class ContactReactiveComponent implements OnInit{
  name: string | undefined;
  password: string | undefined;

  contactForm!: FormGroup;
  
  constructor(
    private readonly fb: FormBuilder,

    public userService: UsersService,
    
    private http: HttpClient
    
    
    ) 
    {}

     login() {
       const user = {name: this.name, password: this.password};
       this.userService.login(user).subscribe( data => {
         console.log(data);
       });
     }


  

     register() {
      console.log("Vamos a registarnos");
    }

  ngOnInit(): void{
    this.contactForm = this.initForm();

  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]

    
    })
  }
}