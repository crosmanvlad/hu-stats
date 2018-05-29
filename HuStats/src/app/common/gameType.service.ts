import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Events } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GameTypeService {
    constructor(private http: Http, public events: Events) {}

    getGameTypes(): Observable<Object[]> {
        return this.http
            .get('http://localhost:3088/api/game-type')
            .map((response: Response) => response.json());
    }

    getGames(gameTypeId: String, page: Number): Observable<Object[]> {
        return this.http
            .get(`http://localhost:3088/api/game/${gameTypeId}/${page}`)
            .map((response: Response) => response.json());
    }

    addGame(gameTypeId: String, result: Number): Observable<any> {
        return this.http
            .post(`http://localhost:3088/api/game`, {gameTypeId: gameTypeId, result: result})
            .map((response: Response) => response);
    }

    addGameType(gameType: any): Observable<any> {
        return this.http
            .post('http://localhost:3088/api/game-type', gameType)
            .map((response: Response) => {
                this.events.publish('gametype:created', gameType);
                return response;
            });
    }
}