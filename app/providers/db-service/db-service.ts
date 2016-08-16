import { Injectable } from '@angular/core';
import { Storage, SqlStorage } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the DbService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbService {
  storage: any;

  constructor() {
    this.storage = new Storage(SqlStorage);
    // this.storage.query('CREATE TABLE IF NOT EXISTS list (id INTEGER PRIMARY KEY AUTOINCREMENT, duaName TEXT)');
    //  this.storage.query('CREATE TABLE IF NOT EXISTS dua (id INTEGER PRIMARY KEY AUTOINCREMENT, duaId INTEGER, ayatNumber INTEGER, arab TEXT, rus TEXT, transcription TEXT)');
    //  this.initDb();
    let dbObject = {
      list: [
        {
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
              'rus': 'Слава Аллаху,Владыке всех миров,,'
            }
          ]

        },
        {
          'id': 2,
          'name': 'Алиф лам мим',
          'audio': '02-alif-lam-mim.mp3',
          'ayats': [
            {
              'arab': 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ',
              'translit': 'БисмиЛ-ляаhир-рахмаанир-рахиим',
              'rus': 'Во имя Аллаха Милостивого, Милосердного,'
            },
            {
              'arab': 'ألم ',
              'translit': 'Алиф лааам мииим',
              'rus': 'Алиф лам мим,'
            }
          ]

        }
      ]
    };

    this.storage.set('obj', dbObject);

  }

  initDb() {
    console.log('INSERTING data...');
    //  let sql = 'INSERT INTO list (id, duaName) VALUES (1,Фатиха)';
    //   return this.storage.query(sql);
  }



  getList() {
    //   let sql = 'SELECT * FROM list';
    //   return this.storage.query(sql);
    return this.storage.get('obj');
  }

  getDuaById(id) {
    //   let sql = 'SELECT * FROM articles WHERE id = \"' + id + '\"';
    //   return this.storage.query(sql);
  }


}

