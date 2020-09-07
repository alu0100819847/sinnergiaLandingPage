import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {SubscriptionModel} from './subscription.model';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  constructor(private http: HttpService, private dialog: MatDialog) { }
  user: SubscriptionModel = { email: '', role: ''};
  ngOnInit(): void {
  }

  register() {
    this.http.register(this.user).subscribe( (a) => {
        console.log('dummy: ' + a);
        this.dialog.closeAll();
      }
    );
  }
}
