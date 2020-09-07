import { Component, OnInit } from '@angular/core';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {HttpService} from '../services/http.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-description',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSubscription() {
    this.dialog.open(SubscriptionFormComponent);
  }
}
