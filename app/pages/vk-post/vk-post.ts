import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';
import {Website} from '../../providers/website/website';


/*
  Generated class for the VkPostPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/vk-post/vk-post.html',
})
export class VkPostPage {
  parentPost: any;
  webSite: any;
  post: any;
  date: any;
  comments: any = [];
  platform: any;
  browser: any;
  console: string;
 /* width: any;
  height: any;
  pinchW: any; 
  pinchH: any;
  timeout: any; */
  constructor(private nav: NavController, navParams: NavParams, webSite: Website, platform: Platform) {
    this.nav = nav;
    this.parentPost = navParams.data;
    this.webSite = webSite;
    this.platform = platform;
    this.post = this.parentPost;
    this.date = new Date();
    this.getVkPostById();
  }
 
  getVkPostById() {
    this.webSite.getVkPostById(this.parentPost.id)
      .then(post => {
        this.comments = [];
        this.post.text = post.text.split('\n').join('<br>');
        if (this.post.comments.count != 0) {
          
          this.webSite.getVkComments(this.post.id, 100, 0)
            .then(comments => {
              let ids = "";
              for (let i in comments.items) {
                
                ids = ids + "," + comments.items[i].from_id;
                try{
                  this.date.setTime(comments.items[i].date * 1000);
                let options = {
                  //     era: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  //    weekday: 'long',
                  //    timezone: 'UTC',
                  hour: 'numeric',
                  minute: 'numeric',
                  //    second: 'numeric'
                };
                comments.items[i].date = this.date.toLocaleString("ru", options);
              } catch (error) {
                comments.items[i].date="";
              }
                

                this.comments.push(comments.items[i]);

              }
              this.webSite.getVkUsers(ids)
                .then(users => {
                  for (let i in users) {
                    
                    this.comments[i].first_name = users[i].first_name;
                    this.comments[i].last_name = users[i].last_name;
                    this.comments[i].photo_50 = users[i].photo_50;
                  }
                });

            });

        }
        console.log(this.comments);
      }, error => {
        console.log(error);
      });

  }

  openBrowser() {
    this.platform.ready().then(() => {
      let url = 'https://vk.com/wall-77334796_' + this.post.id;
      this.browser = new InAppBrowser();
      this.browser.open(url, '_system', 'location=yes');
   });
  }

  photoView(){
  //  PhotoViewer.show(this.post.preview);
    // <div *ngFor="let attachment of post.attachments"><img [src]="attachment" (click)="photoView(attachment)"></div>
  }
}
