import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = navParams.get('id');
    let name = navParams.get('name');
    let key = navParams.get('key');
    let regNumber = navParams.get('RegNumber');
    let contact = navParams.get('Contact');
    console.log(id);
    console.log(name);
    console.log(key);
    console.log(regNumber);
    console.log(contact);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
