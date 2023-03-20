import { SubscribersService } from './../services/subscribers.service';
import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit{

  isEmailError: boolean = false
  isSubscribed: boolean = false

  constructor(private subService: SubscribersService) { }
  
  ngOnInit(): void {
  }

  onSubmit(formVal: any) {
    //console.log(formVal)
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }

    //this.subService.addSubs(subData)
    this.subService.checkSubs(subData.email).subscribe(val => {
      console.log(val)

      if (val.empty) {
        this.subService.addSubs(subData)
        this.isSubscribed = true
      } else {
        //console.log("Email Adress is Already in use");
        this.isEmailError = true
      }
    })
  }

}
