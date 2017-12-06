// import { async, TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
// import { IonicModule, Platform } from 'ionic-angular';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import {} from 'jasmine';

// import { BarcodeService } from './barcode';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { IonicStorageModule } from '@ionic/storage';

// import {
//   PlatformMock,
//   StatusBarMock, 
//   SplashScreenMock,
//   BarcodeScannerMock,
//   StorageMock,
//   BarcodeServiceMock
// } from '../../test-config/mocks-ionic';
// import { Observable } from 'rxjs/RX';
// import { By } from '@angular/platform-browser';



// describe('Barcode Service', () => {
  
//     beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [BarcodeService],
//       imports: [
//         IonicModule.forRoot(BarcodeService),IonicStorageModule.forRoot(),
//       ],
//       providers: [
//         { provide: StatusBar, useClass: StatusBarMock },
//         { provide: SplashScreen, useClass: SplashScreenMock },
//         { provide: Platform, useClass: PlatformMock },
//         { provide: BarcodeScanner, useClass: BarcodeScannerMock },
//         { provide: BarcodeService, useClass: BarcodeServiceMock}
//       ],
//     });
//   }));

//   beforeEach(() => {
//     it("NgOninit should exist", function() {
//         expect(BarcodeService.addBarcode).toBeDefined();
//     });
//   });



// });