import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'page-musicpay',
  templateUrl: 'musicpay.html'
})
export class MusicpayPage {  
    public music1: any = {};
     public music2: any = {};
    public isNew = true;
    public action = 'Add';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService) {
    }

    ionViewDidLoad() {
        let editBirthday1 = this.navParams.get('music1');
        let editBirthday2 = this.navParams.get('music2');

        if (editBirthday1 && editBirthday2) {
            this.music1 = editBirthday1;
            this.music2 = editBirthday2;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save() {
        //this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.music1).catch(console.error.bind(console));
            this.birthdayService.add(this.music2).catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.music1).catch(console.error.bind(console));
            this.birthdayService.update(this.music2).catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.music1).catch(console.error.bind(console));
        this.birthdayService.delete(this.music2).catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.music1);
        this.viewCtrl.dismiss(this.music2);
    }
}