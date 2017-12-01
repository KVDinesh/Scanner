import { barcode } from '../Modals/data';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';

declare var cordova: any;

@Injectable()
export class BarcodeService
{
    private barcodes: barcode[]= [];
    constructor(private storage:Storage,private file:File)
    {

    }
    addBarcode(data:string,format:string)
    {
        const Barcode = new barcode(data,format);
        this.barcodes.push(Barcode);
        this.storage.set('barcodes',this.barcodes)
        .then(
        )
        .catch(
        err =>
            {
                 this.barcodes.splice(this.barcodes.indexOf(Barcode),1);
             }

        );
    }

getBarcodes()
{
    return this.storage.get('barcodes')
    .then(
        (barcodes:barcode[]) => {
            this.barcodes = barcodes != null ? barcodes : [];
            return this.barcodes;
        }
    )
    .catch(
        err =>
        {
            console.log(err);
        }
    )
}


}
