import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "./../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  user$: Object;
  
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    //this.dataService.delete(this.user$).subscribe( dataService => this.user$ = dataService);  

    this.dataService.delete(this.user$)
    .subscribe(x => {
      this.dataService.getUser(this.user$);
      this.router.navigate(['']);
    })
  }
  }


