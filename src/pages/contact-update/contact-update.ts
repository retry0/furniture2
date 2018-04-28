import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import provider user
import{UserProvider} from "../../providers/user/user";

/**
 * Generated class for the ContactUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-update',
  templateUrl: 'contact-update.html',
})
export class ContactUpdatePage {
  //menampung variabel(array)
  private userid: string="";
  //variabel
  private useremail: string = "";
  private userpassword: string = "";
  private name: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              // inject provider
              private userProvider:UserProvider) {
//inject variabel
var data = navParams.data;
this.userid = data.userid;
this.useremail = data.useremail;
this.userpassword = data.userpassword;
this.name = data.name;
}

ionViewDidLoad() {
console.log('ionViewDidLoad ContactUpdatePage');
}

//function update user
  updateUser(){
    //variabel data yang berisi user password dan name
    var data ={
      "useremail": this.useremail,
      "userpassword": this.userpassword,
      "name": this.name
    }
    this.userProvider.updateUser(this.userid,data).subscribe((result)=>{
      console.log(result);
      this.navCtrl.pop();
    });
  }

}
