import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable} from'angularfire2/database';
import {listItem} from '../../app/Models/list.item.interface';

import{MapPage} from'../map_Page/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listItemRef$: FirebaseListObservable<listItem[]>

  constructor(public navCtrl: NavController, private database: AngularFireDatabase,
     private actionSheetController: ActionSheetController) {

      this.listItemRef$ = this.database.list('cabs');
//       this.navCtrl.push(MapPage); 

  }

  selectedCab(listItem: listItem)
  {
    this.navCtrl.push(MapPage, { id:'12345', name: 'cup', key:listItem.$key,
     RegNumber:listItem.reg_number, Contact: listItem.number});
    
  }
    //Navigate to the Map-Page
    //this.navCtrl.push(MapPage, {listItemId: listItem.make});
    //console.log("Contact Number is:" + {listItemId: listItem.make});


    
    // this.database.list('/cabs', {preserveSnapshot: true})
    // .subscribe(snapshot=>{
    //   snapshot.forEach(snapshot=>{
    //     console.log(snapshot.key, snapshot.val());
    //     this.listItemRef$.push({
    //       id:snapshot.key,
    //       Contact: snapshot.val().Contact
    //     });
    //   });
    //   //this.navCtrl.push(MapPage, snapshot.val());
    // });
    // const cources: FirebaseListObservable<any> = this.database.list('/cabs');
    
    //       const cou=this.database.object('cabs/-KtpObiOarerZuU1JWrY');
    //       cou.subscribe(console.log)    

}
