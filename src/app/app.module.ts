import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DescriptionComponent } from './description/description.component';
import { SubscriptionFormComponent } from './description/subscription-form/subscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DescriptionComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
