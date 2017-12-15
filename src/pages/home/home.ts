import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { barcode } from '../../Modals/data';
import { BarcodeService } from '../../services/barcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  barcodes : barcode[] = [];
  constructor(public scan: BarcodeScanner,private barcodeservice: BarcodeService) {

  }
  public openScanner()
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
