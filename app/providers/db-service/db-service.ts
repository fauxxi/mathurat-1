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
          'name': 'Аль-Фатиха [Открывающиая] (1-7)',
          'audio': '../../../audio/audio_1.mp3',
          'ayats': [
            {
              'arab': 'أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
              'translit': 'А’уузу биЛляаhи минаш- Шайтъаанир-раджиим',
              'rus': 'Прибегаю к Аллаху за помощью против Шайтана, побиваемого камнями.'
            },
            {
              'arab': 'بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ',
              'translit': 'БисмиЛ-ляаhир-рахмаанир-рахиим',
              'rus': 'Во имя Аллаха Милостивого, Милосердного,'
            },
            {
              'arab': 'الْحَمْدُ للّهِ رَبِّ الْعَالَمِينَ ',
              'translit': 'Альхамду ли Лляаhи Раббиль-’аалямиин',
              'rus': 'Слава Аллаху,Владыке всех миров,'
            },
            {
              'arab': 'الرَّحْمَـنِ الرَّحِيمِ ',
              'translit': 'Ар-рахмаани-р-рахиим',
              'rus': 'Милостивому, Милосердному,'
            },
            {
              'arab': 'مَالِكِ يَوْمِ الدِّينِ ',
              'translit': 'Маалики яумид-диин',
              'rus': 'Властелину Судного Дня,'
            },
            {
              'arab': 'إِيَّاكَ نَعْبُدُ وإِيَّاكَ نَسْتَعِينُ ',
              'translit': 'Ийяакя на’буду уа ийяакя наста’иин',
              'rus': 'Тебе одному поклоняемся и к Тебе одному взываем о помощи,'
            },
            {
              'arab': 'اهْدِنَــــا الصِّرَاطَ المُستَقِيمَ ',
              'translit': 'Иhдинасъ сырааталь мустакъим',
              'rus': 'Наставь нас на путь праведный,'
            },
            {
              'arab': 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ المَغْضُوبِ عَلَيْهِمْ وَلَ الضَّالِّينَ ',
              'translit': 'Сыраатъаль лязиина ан ’амта аляйhим Гъайриль магъдъууби’аляйhим уа лядъ-дъаааллиин',
              'rus': 'Путь тех, кого ты одарил своими благами, Не тех, которые находятся под гневом, и не заблудших.'
            },
            {
              'arab': '(آمين)',
              'translit': '(Аамиин).',
              'rus': '(Аамиин).'
            }
          ]

        },
        {
          'id': 2,
          'name': 'Аль-Баккара [Корова] (1-5)',
          'audio': '../../../audio/audio_2.mp3',
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
            },
          
            {
              'arab': 'ذَلِكَ الْكِتَابُ لاَ رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ ',
              'translit': 'Зъааликаль - китаабу ляя ройбя фииhи hудаль-лиль-муттакъиин',
              'rus': 'Эта книга - нет сомнения в ней - руководство для богобоязненных'
            },
            {
              'arab': 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلوةَوَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ ',
              'translit': 'Аллязиина йу’минууна биль гъайби уа йукъимуунасъ-съаляята уа миммаа разакънааhум йунфикъууун',
              'rus': 'тех, которые веруют в тайное и выстаивают молитву и из того, чем Мы их наделили, расходуют'
            },
            {
              'arab': 'والَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَوَبِالآخِرَةِ هُمْ يُوقِنُونَ',
              'translit': 'Уаль-лазиина йу’минууна бимаа унзиля иляйка уа маа унзиля мин къабликя уа биль-аахъирати hум йуукъинуyун',
              'rus': 'и тех, которые веруют в то, что ниспослано тебе и что ниспослано до тебя, и в последней жизни они убеждены'
            },
            {
              'arab': 'أُوْلَئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ وَأُوْلَئِكَ هُمُ الْمُفْلِحُونَ ',
              'translit': 'Улаа-икя \'аляя hудам - мир-раббихим уа улаа-икя hумуль-муфлихуун',
              'rus': 'Они на прямом пути от их Господа, и они, достигшие успеха'
            }
          ]
        },
        {
          'id': 3,
          'name': 'Аль-Баккара [Корова] (255-257)',
          'audio': '',
          'ayats': [
            {
              'arab': 'اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ',
              'translit': 'Аллааhу ляя иляяhа илляя hуаль-Хай-йупь-Къай-йуум',
              'rus': '(255) Аллах - нет божества, кроме Него, Живого, Сущего'
            },
            {
              'arab': 'لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ',
              'translit': 'Ляя та’хузъуhуу синату-уа ляя наум.',
              'rus': 'не овладевает Им ни дремота, ни сон'
            },
            {
              'arab': 'لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ',
              'translit': 'Лаhуу маа фис-самаауаати уа маа филь-аръдъ',
              'rus': 'Ему принадлежит то, что в небесах и на земле'
            },
            {
              'arab': 'مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ',
              'translit': 'Ман зъал-лязъии   яшфа-’у ’ындаhуу илляя би изъниhи',
              'rus': 'Кто заступится перед Ним, иначе как с Его позволения?'
            },
            {
              'arab': 'يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ',
              'translit': 'Йаъламу маа байна айдииhим уа маа хъалфаhум',
              'rus': 'Он знает то, что было до них, и что будет после них'
            },
            {
              'arab': 'وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء',
              'translit': 'уа ляя йухиитъууна бишай-им мин ’илмиhии илляя бимаа шаа-а',
              'rus': 'А они не постигают нечего из Его знания, кроме того, что Он пожелает'
            },
            {
              'arab': 'وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ',
              'translit': 'Уаси’а куръсиийуhус-самаауаати уалъ-ардъ.',
              'rus': 'Трон Его объемлет небеса и земли'
            },
            {
              'arab': 'وَلاَ يَؤُودُهُ حِفْظُهُمَا',
              'translit': 'Уа ляя йауудуhуу хифзъуhумаа',
              'rus': 'и не в тягость Ему охрана их,'
            },
            {
              'arab': 'وَهُوَ الْعَلِيُّ الْعَظِيمُ ',
              'translit': 'уа hуаль-’алиййуль-’азъиим. ',
              'rus': 'поистине,   Он   -  Всевышний, Великий!'
            },
            {
              'arab': 'لَا إِكْرَاهَ فِي الدِّينِ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ',
              'translit': 'Ля икраhа фид-диини къаттабай-йанар-рушду миналь – гъаййи',
              'rus': 'Нет принуждения в религии. Уже ясно отличился прямой путь от заблуждения.'
            },
            {
              'arab': 'فَمَن يَّكْفُرْ بِالطَّاغُوتِ وَيُؤْمِنْ بِاللهِ فَقَدِاسْتَمْسَكَ بِالْعُرْوَةِ الوُثْقَى لَا انْفِصَامَ لَهَا',
              'translit': 'фамай-йакфуръ битъ-тъаагъуути уа йу’мимм-биллааhи факъадистамсакя биль-’уруатиль-уськъаа лан фисъама ляhаа',
              'rus': 'Кто не верует в идолопоклонство и верует в Аллаха,  тот ухватился за надежную опору, которая не сокрушится.'
            },
            {
              'arab': 'وَاللهُ سَمِيعٌ عَلِيمٌ ',
              'translit': 'уаллааhу Самии’ун ’алиим',
              'rus': '(256) Поистине,  Аллах  - Всеслышащий, Всезнающий.'
            },
            {
              'arab': 'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا يُخْرُجُهُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ',
              'translit': 'Аллааhу уалиййуллазъиина аамануу йухъриджуhум миназъ-зъулумаати илян-нуури',
              'rus': 'Аллах - друг тех, которые уверовали: Он выводит их из мрака к свету.'
            },
            {
              'arab': 'وَالَّذِينَ كَفَرُوا أَوْلِيَاؤُهُمُ الطَّاغُوتُ يُخْرِجُونَهُممِّنَ النُّورِ إِلَى الظُّلُمَاتِ',
              'translit': 'уаллазъииня кафаруу аулийаа-уhумутъ-тъаагъуту йухъриджунаhум минан-нуури илазъ-зъулумаати',
              'rus': 'А те, которые неверны, друзья их - идолы; они выводят их от света к мраку.'
            },
            {
              'arab': 'أُولَئِكَ أَصْحَابُ النَّارِ هُمْ فِيهَا خَالِدُونَ ',
              'translit': 'улаа-икя асъхаабун-наари hум фииhаа хъаалидуун',
              'rus': '(257) Это - обитатели огня, они в нём вечно прибывают! '
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        },
        {
          'id': 3,
          'name': '',
          'audio': '',
          'ayats': [
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            },
            {
              'arab': '',
              'translit': '',
              'rus': ''
            }
          ]

        }
       

        
      ]
  };


    this.storage.set('obj', JSON.stringify(dbObject));

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

