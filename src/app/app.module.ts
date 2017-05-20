import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { ModePage } from '../pages/mode/mode';
import { CatePage } from '../pages/cate/cate';
import { HeropayPage } from '../pages/heropay/heropay';
import { MusicpayPage } from '../pages/musicpay/musicpay';
import { SportpayPage } from '../pages/sportpay/sportpay'; 
import {RoomtypePage} from '../pages/roomtype/roomtype';
import { LivpayPage } from '../pages/livpay/livpay';
import { BedpayPage } from '../pages/bedpay/bedpay';
import { KitchenpayPage } from '../pages/kitchenpay/kitchenpay';  
import { ResultPage } from '../pages/result/result';  
import { BirthdayService } from '../services/birthday.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    ModePage,
    CatePage,
    HeropayPage,
    MusicpayPage,
    SportpayPage,
    RoomtypePage,
    LivpayPage,
    KitchenpayPage,
    BedpayPage,
    ResultPage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
     ModePage,
    CatePage,
    HeropayPage,
    MusicpayPage,
    SportpayPage,
    RoomtypePage,
    LivpayPage,
    KitchenpayPage,
    BedpayPage,
    ResultPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, BirthdayService]
})
export class AppModule {}
