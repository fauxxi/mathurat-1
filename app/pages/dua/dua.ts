import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DuaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dua/dua.html',
})
export class DuaPage {

  dua: any;
  constructor(private navCtrl: NavController, navParams: NavParams) {
  //  console.log(navParams.data.length);
  //  if (navParams.data) {
       this.dua = navParams.data.dua;
  //  } else {
  //    console.log('this.dua - undefined');
  /*    this.dua = {
        'id': 1,
        'name': 'Фатиха',
        'audio': '01-fatiha.mp3',
        'ayats': [
          {
            'arab': 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ',
            'translit': 'БисмиЛ-ляаhир-рахмаанир-рахиим',
            'rus': 'Во имя Аллаха Милостивого, Милосердного,'
          },
          {
            'arab': 'الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ ',
            'translit': 'Альхамду ли Лляаhи Раббиль-’аалямиин',
            'rus': 'Слава Аллаху,Владыке всех миров,'
          }
        ]
      };
    }
  */  

    console.log(this.dua);
    console.log(this.dua.id);
  }


}
