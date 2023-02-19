import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authAdmin : any|undefined;
  constructor(private httpClient :HttpClient) { }

   login(admin:any):Observable<any>{
      let ad = this.httpClient.post('http://localhost:8181/auth/login',admin);
      if(!ad) return throwError(()=>new Error("admin not found"));
       return ad;
   }

   authenticatAdmin(admin:any):Observable<boolean>{
    this.authAdmin=admin;
    localStorage.setItem("jwt","JWT_TOKEN");
    localStorage.setItem("admin", this.authAdmin.username);

    return of(true);
   }

   isAuthenticed(){
    console.log(this.authAdmin = localStorage.getItem('admin'))
    return this.authAdmin = localStorage.getItem('admin');
   }

   logout():Observable<boolean>{
    this.authAdmin = null;
    localStorage.clear();
    return of(true);
   }



}
