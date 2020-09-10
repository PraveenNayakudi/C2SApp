import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  register_user(userForm:NgForm){
    // console.log(userForm)
    this.dataService.RegisterUser(userForm.value)
  }
}
