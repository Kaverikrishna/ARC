import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppComponent } from './app.component';
import { UserComponent } from './feature/user/user.component';
import { HomeComponent } from './feature/home/home.component';
import { AdminComponent } from './feature/admin/admin.component';
import { NotFoundComponentComponent } from './feature/not-found-component/not-found-component.component';
import { ParentComponent } from './feature/parent/parent.component';
import { ChildComponent } from './feature/child/child.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path:'user' , component : UserComponent },
  { path: 'home', component : HomeComponent },
  { path: 'admin', component: AdminComponent  },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
