import { ComponentFixture, async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
// import { PlatformMock } from '../mocks';
import {} from 'jasmine';
import { MenuMock, PlatformMock, StatusBarMock, SplashScreenMock } from 'ionic-mocks';
import { MyApp } from './app.component';

let instance: MyApp = null;

describe('ClickerApp', () => {
  
    beforeEach(() => {
      instance = new MyApp(
        (<any> PlatformMock.instance()),
        (<any>SplashScreenMock.instance()),
        (<any>StatusBarMock.instance())
    );
    });

  it('should be created', () => {
    expect(instance).toBeTruthy();
  });
});