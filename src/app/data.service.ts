import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userData } from './interfaces/userdata.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    
   }
   RegisterUser(userData:userData){
     this.http.post('https://c2sapp-9d417.firebaseio.com/registered_farmers.json',userData).subscribe(
       resData=>{
         console.log(resData);
       },
       err=>{
         console.log(err)
       }
     )
   }
}
