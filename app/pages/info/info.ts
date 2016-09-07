import {NavController, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
import { EmailComposer } from 'ionic-native';

/*
  Generated class for the InfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/info/info.html',
})
export class InfoPage {
  mailText: any;
  platform: any;
  tmp: any;
  constructor(public nav: NavController, platform: Platform) {
    this.mailText = "";
    this.platform = platform;
   // console.log("mail init");
  }

  sendMail() {
   // console.log("test mail");
    this.platform.ready().then(() => {
      console.log("platform.ready");
      this.tmp = EmailComposer.isAvailable().then((available: boolean) => {
        console.log(available);
        
         // console.log(" mail available");
          let email = {
            to: 'ansaril3g@gmail.com',

         //   bcc: ['ansaril3g@gmail.com'],
            attachments: [],
            subject: 'Приложение Al-Mathurat Rus',
            body: this.mailText,
            isHtml: false
          };

          // Send a text message using default options
          EmailComposer.open(email);
        
      });
    });


  }

}
