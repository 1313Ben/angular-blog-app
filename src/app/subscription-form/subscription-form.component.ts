import { SubscribersService } from './../services/subscribers.service';
import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit{

  constructor(private subService: SubscribersService) { }
  
  ngOnInit(): void {
  }

  onSubmit(formVal: any) {
    //console.log(formVal)
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }

    this.subService.addSubs(subData)
  }

}
