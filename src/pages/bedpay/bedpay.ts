import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'page-bedpay',
  templateUrl: 'bedpay.html'
})
export class BedpayPage {  
    public bed: any = {};
    public isNew = true;
    public action = 'Add';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService) {
    }

    ionViewDidLoad() {
        let editBirthday1 = this.navParams.get('bed');

        if (editBirthday1) {
            this.bed = editBirthday1;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save() {
        //this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.bed).catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.bed).catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.bed).catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.bed);
    }
}