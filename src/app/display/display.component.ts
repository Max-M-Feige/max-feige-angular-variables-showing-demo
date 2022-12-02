import { Component } from '@angular/core';
import { Account } from '../account';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  taco: string = "Whatever I want";


  myAccount: Account = new Account("Max",100,"Max's Checking Account");


  accounts: Account[] = [new Account("Max",100,"Max's Checking Account"), new Account("Max",500,"Max's Savings Account")];

}
