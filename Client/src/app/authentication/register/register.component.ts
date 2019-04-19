import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form;
  constructor(private fb:FormBuilder, private router:Router , private authService:AuthService) { }

  ngOnInit() {

    this.form = this.fb.group({
      username:['',Validators.required ],
      email:['',Validators.required,],
      password:['',Validators.required ]
    })

    console.log(this.f);
  }

  register(){
    this.authService
      .register(this.form.value)
      .subscribe((data) =>{
        this.router.navigate(['/login'])
      })
  }

  get f (){
    return this.form.controls;
  }

}
