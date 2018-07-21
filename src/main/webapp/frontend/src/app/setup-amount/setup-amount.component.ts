import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setup-amount',
  templateUrl: './setup-amount.component.html',
  styleUrls: ['./setup-amount.component.css']
})
export class SetupAmountComponent implements OnInit {

  @Input() customer: any;

  constructor() { }

  ngOnInit() {
  }

}
