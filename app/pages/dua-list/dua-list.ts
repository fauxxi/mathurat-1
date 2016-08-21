/// <reference path="../../../typings/main.d.ts" />

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
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
  duaList: Array<{}>;
  dbService: any;
  isBusy: boolean;
  platform: any;

  constructor(private navCtrl: NavController, dbService: DbService, platform: Platform) {
    this.dbService = dbService;
    this.isBusy = true;
    this.platform = platform;
    this.dbService.getList().then((obj) => {
      console.log('list=');
      console.log(JSON.parse(obj));
      if (obj) {
        this.duaList = JSON.parse(obj).list;
      }
      this.isBusy = false;
    });
  }

  duaTapped(event, dua) {

    this.platform.ready().then(() => {
      //   this.singleTrack.src = this.getPhoneGapPath(this.dua.audio);
      // dua.src = '/android_asset/www/build/audio/audio_1.mp3';
      let dua_audio = this.getPhoneGapPath() + dua.audio;
      //   File.di
      console.log('dua audio=', dua_audio);
      this.navCtrl.push(DuaPage, {
        'dua': dua,
        'dua_audio': dua_audio
      });
    });
  }

  getPhoneGapPath() {
    //  path = window.location.pathname;
    let path = cordova.file.documentsDirectory; 

    console.log('path=', path);
    let sizefilename = path.length - (path.lastIndexOf('/') + 1);
    path = path.substr(0, path.length - sizefilename);
    

    if (this.platform.is('android')) {
      path = '/android_asset/' ;
    } else {
   //   path = 
    }
    // var path = this.file.getDirectory();
    //  path = path.toString();
    //  path = path.substr(0, path.length - 10 );
    console.log('path=', path);
    return path;
  };

}
