import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  
  constructor(public authService:AuthService , private router:Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    
    this.router.navigate([ '/login' ]);
  }

}
