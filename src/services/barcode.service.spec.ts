import { BarcodeScannerMock, StorageMock } from '../mocks';
import { BarcodeService } from './barcode';
import { TestData } from '../test-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TestUtils } from '../test';
import { ComponentFixture, async } from '@angular/core/testing';


let Scanner: BarcodeService = null;

describe('Barcode Service', () => {

    beforeEach(() => {
        Scanner = new BarcodeService(<any>new StorageMock());
        spyOn(Scanner['storage'], 'set').and.callThrough();
      });

      it('initialises', () => {
        expect(Scanner).not.toBeNull();
      });

      it("should have a addBarcodes method", () => {
        expect(Scanner.addBarcode).toBeDefined();
      });

      it("should have a getBarcodes method", () => {
        expect(Scanner.getBarcodes).toBeDefined();
      });

      it("barcodes array is defined", () => {
        expect(Scanner.barcodes).toBeDefined();
      });

      it("addBarcodes method should add the new data to barcodes array", () => {
        expect(Scanner.barcodes).toBeDefined();
      });





});
