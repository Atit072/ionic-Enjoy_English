import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'page-sportpay',
  templateUrl: 'sportpay.html'
})
export class SportpayPage {  
    public sport1: any = {};
     public sport2: any = {};
    public isNew = true;
    public action = 'Add';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService) {
    }

    ionViewDidLoad() {
        let editBirthday1 = this.navParams.get('sport1');
        let editBirthday2 = this.navParams.get('sport2');

        if (editBirthday1 && editBirthday2) {
            this.sport1 = editBirthday1;
            this.sport2 = editBirthday2;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save() {
        //this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.sport1).catch(console.error.bind(console));
            this.birthdayService.add(this.sport2).catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.sport1).catch(console.error.bind(console));
            this.birthdayService.update(this.sport2).catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.sport1).catch(console.error.bind(console));
        this.birthdayService.delete(this.sport2).catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.sport1);
        this.viewCtrl.dismiss(this.sport2);
    }
}