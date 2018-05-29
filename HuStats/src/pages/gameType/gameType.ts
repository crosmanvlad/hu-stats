import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameTypeService } from '../../app/common/gameType.service';
import { ReversePipe } from '../../app/common/reverse.pipe';


@Component({
  selector: 'page-game-type',
  templateUrl: 'gameType.html'
})
export class GameTypePage implements OnInit {

     gameType: any;
     pagesLoaded: number;
     games: any;

     constructor(
         public navCtrl: NavController,
         public navParams: NavParams,
         private gameTypeService: GameTypeService) {
             this.gameType = navParams.get('gameType');
     }

     ngOnInit() {
         this.gameTypeService
            .getGames(this.gameType.gameTypeId, 0)
            .subscribe((data: Object) => {
                this.games = data;
                this.pagesLoaded = 1;
            });
     };

     loadMore() {
         this.gameTypeService
            .getGames(this.gameType.gameTypeId, this.pagesLoaded)
            .subscribe((data: any) => {
                if (data.totalDays) {
                    this.games.days = this.games.days.concat(data.days);
                    this.games.totalDays += data.totalDays;
                    this.games.totalGames += data.totalGames;
                    this.games.totalWin += data.totalWin;
                    this.pagesLoaded = this.pagesLoaded + 1;
                }
            });
     }

     addGame(result) {
         this.gameTypeService
            .addGame(this.gameType.gameTypeId, result)
            .subscribe((data: any) => {
                if (data.status === 200) {
                    this.ngOnInit();
                }
            })
     }

}