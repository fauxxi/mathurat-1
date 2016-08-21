import { Component, Provider } from '@angular/core';
import { NavController, NavParams, Platform} from 'ionic-angular';
import {AudioTrackComponent, AudioTrackPlayComponent, AudioTrackProgressComponent, AudioTrackProgressBarComponent, AudioTimePipe, AudioProvider} from 'ionic-audio/dist/ionic-audio';
import { MediaPlugin, File } from 'ionic-native';

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
  trascriptionShow: boolean;
  traslateShow: boolean;
  file: any;
 // platform: any;

  constructor(private navCtrl: NavController, navParams: NavParams, private _audioProvider: AudioProvider) {
    this.trascriptionShow = false;
    this.traslateShow = false;
  //  this.file = file;
    this.dua = navParams.data.dua;
    let dua_audio = navParams.data.dua_audio;
    this.singleTrack = {
        src: dua_audio,
        artist: 'Quran',
        title: this.dua.name,
        art: 'build/img/quran.png',
        //   art: 'https://themuslimtimesdotinfodotcom.files.wordpress.com/2013/10/quran-4.png', 
        //   art: 'http://up.ariabax.ir/up/ariabaxx/forum/HolyQuran_icon96.png',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      };
  




    //   this.file = new MediaPlugin('build/audio/audio_4.mp3');
    //   this.file.play();
  }




  rewertTrascription() {
    this.trascriptionShow = !this.trascriptionShow;
  }

  rewertTraslate() {
    this.traslateShow = !this.traslateShow;
  }

  


}
