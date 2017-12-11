import { async, TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { TestUtils } from '../../test';
import { } from 'jasmine';
import { MenuMock, PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks';
import { HomePage } from './home'
import { BarcodeService } from '../../services/barcode';
import { Observable } from 'rxjs/Rx';
import { By } from '@angular/platform-browser';
import { BarcodeScannerMock, BarcodeServiceMock } from '../../mocks';
import { TestData } from '../../test-data';

let fixture: ComponentFixture<HomePage> = null;
let instance: HomePage = null;

describe('HomePage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([HomePage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));


  it('should is created', () => {
    expect(instance).toBeTruthy();
    expect(fixture).toBeTruthy();
  });

  it('should have a class member of barcodes', () => {
    expect(instance.barcodes).toBeDefined();
  });

  it('should have a title of Scanner', async(() => {
    let app = fixture.debugElement.nativeElement;
    expect(app.querySelector('ion-title').textContent).toContain('SCANNER');
  }));

  it("should have a openScanner method", () => {
    expect(instance.openScanner).toBeDefined();
  });

  it("should have ngOninit method", () => {
    expect(instance.ngOnInit).toBeDefined();
  });

  it('should call openscanner when scan button is clicked', fakeAsync(() => {
    spyOn(instance, 'openScanner');
    let button = fixture.debugElement.nativeElement.querySelector('.open-scanner');
    button.click();
    fixture.whenStable().then(() => {
      expect(instance.openScanner).toHaveBeenCalled();
    })
  }));

  it('should scan the barcode and retrieve the decoded text', () => {
    spyOn(instance.scan, 'scan').and.returnValue(Observable.of(TestData.barcodes))
  });
});
