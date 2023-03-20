import { Sub } from './../models/sub';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subData: Sub) {
    this.afs.collection('subscribers').add(subData).then(() => {
      console.log('Subscribers saved successfully')
    })
  }

  checkSubs(subEmail: any) {
    return this.afs.collection('subscribers', ref => ref.where('email', '==', subEmail)).get()
  }
}
