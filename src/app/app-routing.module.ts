import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DescriptionComponent} from './description/description.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'description'},
  {path: 'index', component: IndexComponent},
  {path: 'description', component: DescriptionComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
