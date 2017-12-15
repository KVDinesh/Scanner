import { BarcodeScanner } from "@ionic-native/barcode-scanner";


export class ConfigMock {

    public get(): any {
      return '';
    }

    public getBoolean(): boolean {
      return true;
    }

    public getNumber(): number {
      return 1;
    }
    setTransition(trnsName: string, trnsClass: any) {
      // this does not do anything
     }

  }

  export class FormMock {
    public register(): any {
      return true;
    }
  }

  export class NavMock {

    public pop(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }

    public push(): any {
      return new Promise(function(resolve: Function): void {
        resolve();
      });
    }

    public getActive(): any {
      return {
        'instance': {
          'model': 'something',
        },
      };
    }

    public setRoot(): any {
      return true;
    }
  }

  export class PlatformMock {
    public ready(): Promise<string> {
      return new Promise((resolve) => {
        resolve('READY');
      });
    }

    public registerBackButtonAction(fn: Function, priority?: number): Function {
      return (() => true);
    }

    public hasFocus(ele: HTMLElement): boolean {
      return true;
    }

    public doc(): HTMLDocument {
      return document;
    }

    public registerListener(ele: any, eventName: string, callback: any): Function {
      return (() => true);
    }

    public win(): Window {
      return window;
    }

    public raf(callback: any): number {
      return 1;
    }
  }

  export class MenuMock {
    public close(): any {
      return new Promise((resolve: Function) => {
        resolve();
      });
    }
  }

  export interface BarcodeScannerOptions {

        preferFrontCamera?: boolean;
        showFlipCameraButton?: boolean;
        showTorchButton?: boolean;
        disableAnimations?: boolean;
        disableSuccessBeep?: boolean;
        prompt?: string;
        formats?: string;
        orientation?: string;
        torchOn?: boolean;
        resultDisplayDuration?: number;
    }

    export interface BarcodeScanResult {
        format: 'QR_CODE' | 'DATA_MATRIX' | 'UPC_E' | 'UPC_A' | 'EAN_8' | 'EAN_13' | 'CODE_128' | 'CODE_39' | 'CODE_93' | 'CODABAR' | 'ITF' | 'RSS14' | 'RSS_EXPANDED' | 'PDF417' | 'AZTEC' | 'MSI';
        cancelled: boolean;
        text: string;
    }


    export class BarcodeScannerMock extends BarcodeScanner {
      index: number = 0;
      scan(options?: BarcodeScannerOptions): Promise<BarcodeScanResult> {
        let theResult: BarcodeScanResult = {format: 'QR_CODE', cancelled: false, text: 'RESPONSE' };

        return new Promise((resolve, reject) => {
          resolve(theResult);
        });
      }
      encode(type: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
    }

    export class StorageMock {
      get(param) {
        new Promise((resolve, reject) => {});
      }
      set(param) {
        new Promise((resolve, reject) => {});
      }
    }

    export class BarcodeServiceMock {
      addBarcode()
      {
      }
      getBarcodes() {
        // return (['kvdines.github.io','QR_CODE'])
      }
    }

