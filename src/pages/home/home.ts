import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { barcode } from '../../Modals/data';
import { BarcodeService } from '../../services/barcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  barcodes : barcode[] = [];
  constructor(public navCtrl: NavController,private scan: BarcodeScanner,private storage:Storage,private barcodeservice: BarcodeService) {

  }
  openScanner()
  {
    this.scan.scan().then((data) => {
      this.barcodeservice.addBarcode(data.text,data.format);
     }, (err) => {
         alert(err)
     });
  }
  
  ngOnInit()
  {
    this.barcodeservice.getBarcodes()
    .then(
      (barcodes: barcode[]) => this.barcodes = barcodes
    );
  }
}