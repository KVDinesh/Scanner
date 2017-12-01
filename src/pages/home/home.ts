import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result : string;
  format : string;
  constructor(public navCtrl: NavController,private scan: BarcodeScanner,private storage: Storage) {

  }

  ionViewWillEnter()
  {
    this.result = '';
    this.format = '';
  }

  openScanner()
  {
    this.scan.scan().then((data) => {
      // Success! Barcode data is here
        this.result = data.text;
        this.format =  data.format;
        // this.storage.set('result','data.text');
     }, (err) => {
         // An error occurred
         alert(err)
     });
  }
}