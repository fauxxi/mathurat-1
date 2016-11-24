import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {Website} from '../../providers/website/website';
import {VkPostPage} from '../../pages/vk-post/vk-post';

/*
  Generated class for the VkPage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/vk/vk.html',
})
export class VkPage {
  vkWallPostsCountCurrent: any;
  vkPosts: any;
  webSite: any;
  offset: number;
  date: any;
  isBusy: boolean;
  console: string;
  constructor(public nav: NavController, webSite: Website) {
    this.vkPosts = [];
    this.webSite = webSite;
    this.offset = 0;
    this.isBusy = false;
    this.date = new Date();
    this.getVkPosts();

  }

  getVkPosts() {
    this.isBusy = true;
    new Promise(resolve => {
      setTimeout(() => {
        this.isBusy = false;
        console.log('isBusy done');
      }, 4000);
    });
    this.webSite.getVkWallPosts(10, this.offset)
      .then(data => {
        this.isBusy = false;
        for (let i in data.items) {

          if (data.items[i].text.length > 150) {
            data.items[i].text = data.items[i].text.substring(0, 145) + "..<br><strong>Показать полностью...</strong>"
          }
          data.items[i].text = data.items[i].text.split('\n').join('<br>');

          try {
            this.date.setTime(data.items[i].date * 1000);
            let options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              //    weekday: 'long',
              //    timezone: 'UTC',
              hour: 'numeric',
              minute: 'numeric',
              //    second: 'numeric'
            };
            data.items[i].date = this.date.toLocaleString("ru", options);
          } catch (error) {
            data.items[i].date = "";
          }


          let photoLastKey = "";
          data.items[i].preview = "";
          if (data.items[i].hasOwnProperty("attachments")) {
            if ((data.items[i].attachments[0].type == "photo") || (data.items[i].attachments[0].type == "video")) {
              for (var key in data.items[i].attachments[0][data.items[i].attachments[0].type]) {
                if (key.substr(0, 5) == "photo") {
                  photoLastKey = key;
                }
              }
              //   console.log(data.items[i].attachments[0][data.items[i].attachments[0].type][photoLastKey], photoLastKey);
              data.items[i].preview = data.items[i].attachments[0][data.items[i].attachments[0].type][photoLastKey];
            }

            /*
data.items[i].attachments = [];
            // готовим атачменты
            for (var j in data.items[i].attachments) {
              photoLastKey = "";
              if ((data.items[i].attachments[j].type == "photo") || (data.items[i].attachments[j].type == "video")) {
                //   находим фото с самым большим расширением
                for (var key in data.items[i].attachments[j][data.items[i].attachments[j].type]) {
                  if (key.substr(0, 5) == "photo") {
                    photoLastKey = key;
                  }
                }
                console.log(data.items[i].attachments[j][data.items[i].attachments[j].type][photoLastKey]);
                data.items[i].attachments.push(data.items[i].attachments[j][data.items[i].attachments[j].type][photoLastKey]);
              }
            }*/

          }


          this.vkPosts.push(data.items[i]);

        }

        console.log(this.vkPosts);
        this.offset = this.offset + 10;
      }, error => {
      });

  }

  openPost(post) {
    console.log(post);
    this.nav.push(VkPostPage, post);
  }

}