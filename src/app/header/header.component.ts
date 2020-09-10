import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated:boolean = false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe(
      user=>{
       this.isAuthenticated = !!user;
      }
    )
  }
  
  Logout(){
  this.authService.Logout()
  }
}
