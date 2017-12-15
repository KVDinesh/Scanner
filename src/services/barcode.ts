import { barcode } from '../Modals/data';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class BarcodeService
{
    public barcodes: barcode[]= [];
    constructor(private storage:Storage)
    {

    }

addBarcode(text:string,format:string)
{
        const Barcode = new barcode(text,format);
        this.barcodes.push(Barcode);
        this.storage.set('barcodes',this.barcodes)
        .then()
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
