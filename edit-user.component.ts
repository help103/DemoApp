import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

    UserId: number;
    constructor(private fb: FormBuilder, private user: DataService,  private art: ActivatedRoute,private route: Router) { }
    UserFrm: any;
    //dataf:UserTbl;
    ngOnInit() {
        this.UserFrm=this.fb.group({       
            name:[],
            userName:[],
            email:[],
            mobile:[],
            website:[]
          });


        this.art.params.subscribe((data) =>
            this.UserId=data['id']
        );
        alert(this.UserId);
     
        this.user.getUser(this.UserId).subscribe((data) => {
        alert(JSON.stringify(data));
        this.UserFrm.patchValue({ name: data.name,userName: data.userName,email: data.email, mobile: data.mobile, website: data.website});
        //this.UserFrm.patchValue({userId:this.data.UserId,name: this.data.Name,username: this.data.UserName, email: this.data.Email, website: this.data.Website, mobile: this.data.Mobile});
   });
    }
    updateRecord(): void {

        alert(JSON.stringify(this.UserFrm.value));       
        this.user.updateUser(this.UserId,this.UserFrm.value).subscribe(
        (data) => {
                alert("Record Updated!");    
                this.route.navigate(['']);
           });

        
        //    this.user.updateUser(this.UserId,this.UserFrm.value)
        //    .subscribe((user) => {
        //        alert("Record Updated!");
        //        this.route.navigate(['']);
        //    }
        //   );

    }

}


