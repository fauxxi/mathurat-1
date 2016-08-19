import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent, AudioTimePipe, AudioProvider} from 'ionic-audio/dist/ionic-audio';

/*
  Generated class for the DuaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dua/dua.html',
 // directives: [AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent],
  providers: [] 
})
export class DuaPage {
  track: any;
  dua: any;
  trascriptionShow: boolean;
  traslateShow: boolean;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.trascriptionShow = false;
    this.traslateShow = false;
    this.dua = navParams.data.dua;

    this.track = {
      src: 'build/audio/audio_1.mp3',
      artist: 'Quran',
      title: 'Аль-Фатиха',
      art: 'build/img/1.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    };
  }

  rewertTrascription() {
    this.trascriptionShow = !this.trascriptionShow;
  }

  rewertTraslate() {
    this.traslateShow = !this.traslateShow;
  }

}
