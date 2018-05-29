import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

import { MyApp } from '../../app/app.component';

import { GameTypeService } from '../../app/common/gameType.service';

@Component({
  selector: 'add-game-type',
  templateUrl: 'addGameType.html'
})
export class AddGameType {

  gameType: any;

  constructor(public navCtrl: NavController, private gameTypeservice: GameTypeService,
              public events: Events) {
    this.gameType = {};
  }

  addGamaType(valid) {
    if (valid) {
      this.gameTypeservice
      .addGameType(this.gameType)
      .subscribe((data: any) => {
        if (data.status === 200) {
          this.events.publish('gameTypeAdded', this.gameType);
          this.navCtrl.setRoot(MyApp)
        }
      })
    }
  }

}
