import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from './info/info.component';
import {MainComponent} from './main/main.component';
import {DescriptionComponent} from './description/description.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'index', component: InfoComponent},
  {path: 'description', component: DescriptionComponent},
  {path: 'contact', component: ContactComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
