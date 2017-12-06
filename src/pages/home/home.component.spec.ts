import { async, TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { } from 'jasmine';

import { HomePage } from './home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';

import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  BarcodeScannerMock,
  StorageMock,
  BarcodeServiceMock
} from '../../../test-config/mocks-ionic';
import { BarcodeService } from '../../services/barcode';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Observable } from 'rxjs/RX';
import { By } from '@angular/platform-browser';



describe('HomePage Component', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;
  let storage: Storage;
  let barcodeScanner: BarcodeScanner;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage), IonicStorageModule.forRoot(),
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: BarcodeScanner, useClass: BarcodeScannerMock },
        { provide: Storage, useClass: StorageMock },
        { provide: BarcodeService, useClass: BarcodeServiceMock }
      ],
    });
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    storage = fixture.debugElement.injector.get(Storage);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;

    // spyOn(barcodeScanner, "scan").and.callFake(function () {
    //   return {
    //     then: function (callback) { return callback({ format: 'QR_CODE', cancelled: false, text: 'RESPONSE' }); }
    //   };
    // });

  });

  it('should be created', () => {
    // component = new HomePage();
    expect(component instanceof HomePage).toBe(true);
  });

  it('should have a class member of barcodes', () => {
    expect(component.barcodes).toBeDefined();
  });

  it('should have a title of Scanner', async(() => {
    let app = fixture.debugElement.nativeElement;
    expect(app.querySelector('ion-title').textContent).toContain('SCANNER');
  }));


  it("should have a openScanner method", () => {
    expect(component.openScanner).toBeDefined();
  });

  it("should have ngOninit method", () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('should call openscanner when scan button is clicked', fakeAsync(() => {
    spyOn(component, 'openScanner');
    let button = fixture.debugElement.nativeElement.querySelector('.open-scanner');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openScanner).toHaveBeenCalled();
    })
  }));
});