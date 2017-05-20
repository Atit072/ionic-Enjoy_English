import { Component } from '@angular/core';  
import { NavParams, ViewController } from 'ionic-angular';  
import { BirthdayService } from '../../services/birthday.service';

@Component({
  selector: 'page-heropay',
  templateUrl: 'heropay.html'
})
export class HeropayPage {  
    public hero1: any = {};
     public hero2: any = {};
    public isNew = true;
    public action = 'Add';

    constructor(private viewCtrl: ViewController,
        private navParams: NavParams,
        private birthdayService: BirthdayService) {
    }

    ionViewDidLoad() {
        let editBirthday1 = this.navParams.get('hero1');
        let editBirthday2 = this.navParams.get('hero2');

        if (editBirthday1 && editBirthday2) {
            this.hero1 = editBirthday1;
            this.hero2 = editBirthday2;
            this.isNew = false;
            this.action = 'Edit';
        }
    }

    save() {
        //this.birthday.Date = new Date(this.isoDate);

        if (this.isNew) {
            this.birthdayService.add(this.hero1).catch(console.error.bind(console));
            this.birthdayService.add(this.hero2).catch(console.error.bind(console));
        } else {
            this.birthdayService.update(this.hero1).catch(console.error.bind(console));
            this.birthdayService.update(this.hero2).catch(console.error.bind(console));
        }

        this.dismiss();
    }

    delete() {
        this.birthdayService.delete(this.hero1).catch(console.error.bind(console));
        this.birthdayService.delete(this.hero2).catch(console.error.bind(console));

        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.hero1);
        this.viewCtrl.dismiss(this.hero2);
    }
}