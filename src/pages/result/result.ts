import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';   
import {HeropayPage} from '../heropay/heropay';
import {MusicpayPage} from '../musicpay/musicpay'; 
import {SportpayPage} from '../sportpay/sportpay'; 
import {LivpayPage} from '../livpay/livpay';  
import {KitchenpayPage} from '../kitchenpay/kitchenpay'; 
import {BedpayPage} from '../bedpay/bedpay';


@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {  
    public birthdays = [];

    constructor(private birthdayService: BirthdayService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.birthdayService.initDB();

            this.birthdayService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.birthdays = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }

    showDetail(birthday) {
        let modal = this.modalCtrl.create(HeropayPage, { birthday: birthday });
        modal.present();
    }
     showDetail1(birthday) {
        let modal = this.modalCtrl.create(MusicpayPage, { birthday: birthday });
        modal.present();
    }
     showDetail2(birthday) {
        let modal = this.modalCtrl.create(SportpayPage, { birthday: birthday });
        modal.present();
    }
    showDetail3(birthday) {
        let modal = this.modalCtrl.create(LivpayPage, { birthday: birthday });
        modal.present();
    }
    showDetail4(birthday) {
        let modal = this.modalCtrl.create(KitchenpayPage, { birthday: birthday });
        modal.present();
    }
    showDetail5(birthday) {
        let modal = this.modalCtrl.create(BedpayPage, { birthday: birthday });
        modal.present();
    }
    
}