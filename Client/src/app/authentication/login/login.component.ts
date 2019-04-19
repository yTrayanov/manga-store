import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form; 
  user;
  constructor(private authService:AuthService , private router:Router , private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
    console.log(this.f)
  }

  login(){
      this.authService
        .login(this.form.value)
        .subscribe((data) =>{
          localStorage.setItem('token',data['token']);
          localStorage.setItem('username',data['user']['username']);
          localStorage.setItem('isAdmin',data['user']['isAdmin']);
          console.log(data);
          this.router.navigate(['/home'])
        })
  }

  get f(){
    return this.form.controls;
  }

}
