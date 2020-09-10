import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { take} from 'rxjs/operators'
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-auth';
  constructor(private authService:AuthService){

  }
  ngOnInit(){
    this.authService.autoLogin();
   this.authService.user.pipe(take(1)).subscribe(user=>{
     if(user){
       this.authService.autoLogout()
     }
   })
  }
}
