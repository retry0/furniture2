import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import geolocation
import{Geolocation} from "@ionic-native/geolocation";
//import datepciker
import {DatePicker} from "@ionic-native/date-picker";
//import plugin emailcomposer
import {EmailComposer} from "@ionic-native/email-composer";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  coords:any;
  accuracy:any;
  error:any;
  today;
  currentImage = null;


  constructor(public navCtrl: NavController,
              private geolocation:Geolocation,
             private datepicker:DatePicker,
              private emailComposer: EmailComposer) {
//injetc tanggal hari ini
    this.today = new Date().toISOString()

  }
  //funsgi gelocation
  getPosition(){
    console.log('buton clicked');
    this.geolocation.getCurrentPosition().then((resp)=>{
      this.coords = resp.coords.latitude + ', ' + resp.coords.longitude;
      this.accuracy = resp.coords.accuracy + ' meters';
    }).catch((error)=>{
      this.error ='error geeting location' + error;
    });

  }

  //fungsikirimeamil
  sendEmail() {
    //data
    let email = {
      //tujuan email
      to: 'alifraher@gmail.com',
      cc: 'rizky@gmail.com',
      //atachement gambar
      attachments: [
        this.currentImage
      ],
      //subject
      subject: 'My Cool Image',
      //isi
      body: 'Hey Simon, what do you thing about this image?',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}
