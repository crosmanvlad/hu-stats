import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgZone } from '@angular/core';
import { Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { HomePage } from '../pages/home/home';
import { AddGameType } from '../pages/addGameType/addGameType';
import { GameTypePage } from '../pages/gameType/gameType';

import { GameTypeService } from './common/gameType.service';

this.zone = new NgZone({ enableLongStackTrace: false });

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  public gameTypes: any;

  status: boolean = false;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public gameTypeService: GameTypeService, public zone: NgZone, public events: Events) {
    this.initializeApp();
    this.events.subscribe("gameTypeAdded", (gameType) => {
        this.status = false;
        this.gameTypeService
          .getGameTypes()
          .subscribe((data: any) => {
            this.gameTypes = data;
            this.status = true;
          });
    });
  }

  ngOnInit() {
    this.status = false;
    this.gameTypeService
      .getGameTypes()
      .subscribe((data: any) => {
        this.gameTypes = data;
        this.status = true;
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(gameType) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(GameTypePage, {
      gameType: gameType
    });
  }

  addGameType() {
    this.nav.push(AddGameType);
  }
}
