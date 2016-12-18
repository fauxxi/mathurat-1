/// <reference path="../../../typings/main.d.ts" />

import { Component, Provider } from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';
import {AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent, AudioTimePipe, AudioProvider} from 'ionic-audio/dist/ionic-audio';
import { MediaPlugin, File } from 'ionic-native';
import {DbService} from '../../providers/db-service/db-service';

/*
  Generated class for the DuaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dua/dua.html',
  directives: [AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent],
  providers: []
})
export class DuaPage {
  singleTrack: any;
  dua: any;
  duaNext: any;
  trascriptionShow: boolean;
  traslateShow: boolean;
  file: any;
  platform: any;
  dbService: any;
  isBusy: boolean;
  duaName: string;
  constructor(private navCtrl: NavController, navParams: NavParams, dbService: DbService, _audioProvider: AudioProvider, platform: Platform) {
    this.trascriptionShow = false;
    this.traslateShow = false;
    this.platform = platform;
    this.dbService = dbService;
    this.dua = navParams.data.dua;
    this.isBusy = false;
    this.duaNameExpand();
    let dua_audio = navParams.data.dua_audio;
    this.singleTrack = {
      src: dua_audio,
      artist: 'Quran',
      title: this.duaName,
      art: 'build/img/quran.png',
      //   art: 'https://themuslimtimesdotinfodotcom.files.wordpress.com/2013/10/quran-4.png', 
      //   art: 'http://up.ariabax.ir/up/ariabaxx/forum/HolyQuran_icon96.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    };
    //   this.file = new MediaPlugin('build/audio/audio_4.mp3');
    //   this.file.play();
  }

duaNameExpand(){
  let n = 30 - this.dua.name.length;
  console.log(n);
  this.duaName =this.dua.name;
  this.duaName = this.duaName;
 /* for (let i=0; i<n; i+3) {
    
  }*/
}

  rewertTrascription() {
    this.trascriptionShow = !this.trascriptionShow;
  }

  rewertTraslate() {
    this.traslateShow = !this.traslateShow;
  }

  goToNext() {
    this.isBusy = true;
    this.duaNext = this.dbService.getNextDuaById(this.dua.id)
   
    this.platform.ready().then(() => {
      let dua_audio = this.getPhoneGapPath() + this.duaNext.audio;
      console.log('dua audio=', dua_audio);
      this.isBusy = false;
      this.navCtrl.push(DuaPage, {
        'dua': this.duaNext,
        'dua_audio': dua_audio
      });
    });


  }

  getPhoneGapPath() {
    let path = cordova.file.applicationStorageDirectory;
    console.log('path=', path);
    let sizefilename = path.length - (path.lastIndexOf('/') + 1);
    path = path.substr(0, path.length - sizefilename);

    if (this.platform.is('android')) {
      path = '/android_asset/';
    }
    // var path = this.file.getDirectory();
    //  path = path.toString();
    //  path = path.substr(0, path.length - 10 );
    console.log('path=', path);
    return path;
  };



}
