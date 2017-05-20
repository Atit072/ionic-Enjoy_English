import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';  
import {CatePage} from '../cate/cate';  
import {RoomtypePage} from '../roomtype/roomtype';   

@Component({
  selector: 'page-mode',
  templateUrl: 'mode.html'
})
export class ModePage {  
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
        let modal = this.modalCtrl.create(RoomtypePage, { birthday: birthday });
        modal.present();
    }
    showDetail1(birthday) {
        let modal = this.modalCtrl.create(CatePage, { birthday: birthday });
        modal.present();
    }
}