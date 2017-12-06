import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Storage } from '@ionic/storage';
import { barcode } from '../src/Modals/data';

export class PlatformMock {
  public barcodes: barcode[]= [];
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
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

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
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

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
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
}

export class BarcodeServiceMock {
  openScanner()
  {
    return (['kvdines.github.io','QR_CODE'])
  }
  getBarcodes() {
    return (['kvdines.github.io','QR_CODE'])
  }
}

// export class StorageMock {
//   public static instance(key:any = 'key1', value: any = 'value1'): any {

//       let instance = jasmine.createSpyObj('Storage', [
//           'driver',
//           'ready',
//           'get',
//           'set',
//           'remove',
//           'clear',
//           'length',
//           'keys',
//           'forEach'
//       ]);

//       instance['driver'] = '';

//       instance.ready.and.returnValue(Promise.resolve({}));
//       instance.set.and.returnValue(Promise.resolve());
//       instance.get.and.returnValue(Promise.resolve(value));
//       instance.remove.and.returnValue(Promise.resolve());
//       instance.clear.and.returnValue(Promise.resolve());
//       instance.length.and.returnValue(Promise.resolve(1));
//       instance.keys.and.returnValue(Promise.resolve([key]));
//       instance.forEach.and.returnValue(Promise.resolve());

//       return instance;
//   }
// }

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

  public registerChildNav(nav: any): void {
    return ;
  }

}

export class DeepLinkerMock {

}