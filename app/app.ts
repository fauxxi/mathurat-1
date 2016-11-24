import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {DuaListPage} from './pages/dua-list/dua-list';
import {InfoPage} from './pages/info/info';
import {DuaPage} from './pages/dua/dua';
import {VotePage} from './pages/vote/vote';
import {VkPage} from './pages/vk/vk';
import {DbService} from './providers/db-service/db-service';
import {Website} from './providers/website/website';
import {AudioProvider, WebAudioProvider} from 'ionic-audio/dist/ionic-audio';
import {Type, provide} from '@angular/core';


@Component({
  templateUrl: 'build/app.html',
  // providers: [DbService, AudioProvider]
  providers: [DbService, Website]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = DuaListPage;
  pages: Array<{ title: string, component: any, logo: string }>;
  // dbService: any;
  isBusy: boolean;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    dbService: DbService
  ) {
    this.isBusy = true;
    this.initializeApp();
    // this.dbService = dbService;
    // set our app's pages
    this.pages = [
      { title: 'Молитвы', component: DuaListPage, logo: 'book' },
      { title: 'Хадисы', component: VkPage, logo: 'chatboxes' },
      { title: 'Информация', component: InfoPage, logo: 'information-circle' },
      { title: 'Оценить', component: VotePage, logo: 'thumbs-up' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.isBusy = false;
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [provide(AudioProvider,  { useFactory: AudioProvider.factory })], {
  // tabbarPlacement: 'bottom'
});