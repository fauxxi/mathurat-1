import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DuaPage} from '../../pages/dua/dua';
import {DbService} from '../../providers/db-service/db-service';

/*
  Generated class for the DuaListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dua-list/dua-list.html',
})
export class DuaListPage {
  duaList: any;
  dbService: any;
  constructor(private navCtrl: NavController, dbService: DbService) {
    this.dbService = dbService;
    this.dbService.getList().then((list) => {
      console.log('list=', list);
      if (list !== undefined) {
        this.duaList = list;
      }
    });
  }

  duaTapped(event, dua) {
    console.log('dua=', dua);
    this.navCtrl.push(DuaPage, {
      'dua': dua
    });
  }
}
