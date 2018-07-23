import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { detachEmbeddedView } from '../../../node_modules/@angular/core/src/view';


@Component({
  selector: 'app-setup-amount',
  templateUrl: './setup-amount.component.html',
  styleUrls: ['./setup-amount.component.css']
})
export class SetupAmountComponent implements OnInit {

  public hasSavings: boolean;
  public timeFrame: Array<String>;
  public sliderVal: number;
  public chequingAccount: string;
  public savingsAccount: string;
  public suggestedBudget:any; 
  public customer: any;
  public recommendedAmount: string;
  public constMult= 0.07874+0.02363;
  public income:number; 
  public slide:any; 
  public startDate:any; 
  public endDate=new Date();
  public timePeriod: string;
  public allowance:number;
  public divideBy:number=12; 
  constructor(private dataService: DataServiceService) {
    
  }
  dateLogic(){ 

    this.startDate=new Date(this.startDate);
    console.log(this.startDate);
    if(this.slide==1){ 
      this.endDate.setDate(this.startDate.getDate()+2);
      this.timePeriod="DAILY";
      this.divideBy=365;
      this.calculateValue();
    }
    else if( this.slide ==2)
    {
      this.endDate.setDate(this.startDate.getDate()+7); 
      this.timePeriod="WEEKLY";
      this.divideBy=52;
      this.calculateValue();
    }
    else if (this.slide==3)
    {
      this.endDate.setDate(this.startDate.getDate()+14); 
      this.timePeriod="BI-WEEKLY";
      this.divideBy=26;
      this.calculateValue();
    }
    else if (this.slide==4){
      this.endDate.setDate(this.startDate.getDate()+30);
      this.timePeriod="MONTHLY";
      this.divideBy=12;
      this.calculateValue();
    }

    const allowanceAccount = {
      allowace: this.allowance,
      balance: this.allowance,
      timePeriod: this.timePeriod,
      startDate: this.startDate.toISOString().substring(0,10),
      endDate: this.endDate.toISOString().substring(0,10)
    }

    this.dataService.postAccount('/account/'+ this.customer.id, allowanceAccount).subscribe(
      (customer) => {
        this.customer = customer;
        console.log(customer);
      }
    )
  
  }
  calculateValue(){
    
    if(this.customer.habitationStatus=="rent"){
      let Y = 0.07874+0.02363*0; 
      this.suggestedBudget=(this.income*Y)/this.divideBy;
    }
    else if (this.customer.habitationStatus=="sharingrent"){
      let Y = 0.07874+0.02363*1; 
      this.suggestedBudget=(this.income*Y)/this.divideBy;
    }
    else if ( this.customer.habitationStatus=="rentfree"){
      let Y = 0.07874+0.02363*2; 
      this.suggestedBudget=(this.income*Y)/this.divideBy;
    }
  }
  onClickChequing1() {
    this.chequingAccount = 'Chequing1';
  }

  onClickChequing2() {
    this.chequingAccount = 'Chequing2';
  }

  onClickSavings1() {
    this.savingsAccount = 'Savings1';
  }

  onClickSavings2() {
    this.savingsAccount = 'Savings2';
  }

  
  ngOnInit() {
    this.dataService.customerMessage.subscribe(
        (customer) => {
          this.customer = customer;
          this.chequingAccount = "Chequing1";
          this.savingsAccount = "Savings1";
          if(this.customer.habitationStatus=="rent"){
            let Y = 0.07874+0.02363*0; 
            this.suggestedBudget=this.income*Y;
          }
          else if (this.customer.habitationStatus=="sharingrent"){
            let Y = 0.07874+0.02363*1; 
            this.suggestedBudget=this.income*Y;
          }
          else if ( this.customer.habitationStatus=="rentfree"){
            let Y = 0.07874+0.02363*2; 
            this.suggestedBudget=this.income*Y;
          }
        });

  }


}
