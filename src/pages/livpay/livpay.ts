import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'page-livpay',
  templateUrl: 'livpay.html'
})
export class LivpayPage {  
    public thing1: any = {};
    public isNew = true;
    public action = 'Add';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService) {
    }

    ionViewDidLoad() {
        let editBirthday1 = this.navParams.get('thing1');

        if (editBirthday1) {
            this.thing1 = editBirthday1;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save() {
        //this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.thing1).catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.thing1).catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.thing1).catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.thing1);
    }
}