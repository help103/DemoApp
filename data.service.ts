import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { IUser } from "./IUser";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
 //   APIurl="http://localhost:51022/api/users";// API
     APIurl="http://localhost:49196/users"; //.Net Core WebAPI
  getUsers() {
    return this.http.get(this.APIurl + "/All/")
  }
  
  getUser(userId) {
    return this.http.get(this.APIurl + "/Getbyid/" + userId)
  }
  // getUserById(userId) {
  //   return this.http.get(this.APIurl + "/Getbyid/" + userId)
  // }
    delete(userId): Observable<{}>   {
    return this.http.delete(this.APIurl + "/Remove/" + userId);  
        }
 
  addUser(values:IUser) {    
      return this.http.post(this.APIurl + "/Add/", values);
     
      // return this.http.post<IUser>(this.APIurl+ "/Add/", values).pipe(
      //   catchError(this.errorHandler)
      // );

      // return this.http.post((this.APIurl+ "/Add/"), values)
      // .map(res => this.(res))
      // .share();
    // return this.http.post(this.APIurl + "/Add/", values);//.toPromise(); //.pipe(map((res:Response) => res.json()));
  }
 
  updateUser(id: number, rec: IUser) {   
   // return this.http.put(this.APIurl + "/Update/" + id, rec);
    // return this.http.put(this.APIurl + "/Update/" + id, rec).pipe(
    //   map(res=>res),catchError(this.errorHandler)
    // );
   return this.http.put<IUser>(this.APIurl + "/Update/" + id, rec)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error:Response){
    console.error(error);
    return throwError(error);      
  }

}


