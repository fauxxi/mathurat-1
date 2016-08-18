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
  trascriptionShow: boolean;
  traslateShow: boolean;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.trascriptionShow = false;
    this.traslateShow = false;
    this.dua = navParams.data.dua;
  }

  rewertTrascription() {
    this.trascriptionShow = !this.trascriptionShow;
  }

  rewertTraslate() {
    this.traslateShow = !this.traslateShow;
  }

}
