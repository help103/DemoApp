import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { DataService } from "./../data.service";
import { Router } from "@angular/router";
import { IUser } from "./../IUser";
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit  {

  constructor(private fb:FormBuilder,private userService:DataService,private route: Router){}

  UserFrm:any;
  data:any;
  
  ngOnInit()
   {
     this.UserFrm=this.fb.group({
       name:[],
       username:[],
       email:[],
       mobile:[],
       website:[]
     });

   }
 SaveUser():void
 {
    alert(JSON.stringify(this.UserFrm.value));   
    this.userService.addUser(this.UserFrm.value)
    .subscribe(rec=>this.data=rec);   
    //.subscribe(rec=> this.data=rec);
    this.route.navigate(['']);
    // (data) => {
    //   this.route.navigate(['']);
    // })
    //.subscribe(rec=> this.data=rec);
    //.subscribe(rec => this.data.push(this.UserFrm.value));   
  
    
  }
  
}
