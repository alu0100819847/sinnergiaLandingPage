import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { SubscriptionFormComponent } from './main/subscription-form/subscription-form.component';
import { DescriptionComponent } from './description/description.component';
import { ContactComponent } from './contact/contact.component';
import { SubscriptionFormDialogComponent } from './main/subscription-form/subscription-form-dialog/subscription-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    MainComponent,
    SubscriptionFormComponent,
    DescriptionComponent,
    ContactComponent,
    SubscriptionFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
