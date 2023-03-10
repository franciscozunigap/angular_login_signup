import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})



export class UsersService {
  public name: any;
  public save_item: any;

  constructor(
    private http: HttpClient, private cookies: CookieService
    ) {}
    

  login(user: any ): Observable<any> {
    this.name= user;
    
    return this.http.post("http://localhost:3000/ingresar", user); //enviar post con user y password


  }

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/register", user); //create user


  }

  view(){
    return this.http.get("http://localhost:3000/admin") // lets see users

  }

  update(update: any): Observable<any> {
    return this.http.post("http://localhost:3000/update-user", update); //update user for id


  }

  delete(for_delete: any): Observable<any> {
    return this.http.post("http://localhost:3000/delete-user", for_delete); //delete user for id


  }

  sesion(user: any ): Observable<any> {
    this.name= user;
    
    return this.http.post("http://localhost:3000/usersesion", user); //enviar post con user y password


  }

  sesion_register(user: any ): Observable<any> {
    this.name= user;
    
    return this.http.post("http://localhost:3000/usersesion_register", user); //enviar post con user y password


  }





}

