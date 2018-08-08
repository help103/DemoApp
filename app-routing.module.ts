import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
  {    path: '',  component: UsersComponent  },
  {    path: 'details/:id',    component: DetailsComponent  },
  {    path: 'delete/:id',    component: DeleteUserComponent  },
  {    path: 'addNew',    component: AddNewUserComponent  },
  {    path: "editUser/:id", component: EditUserComponent }
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
