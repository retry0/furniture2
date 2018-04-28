import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {User} from "../../model/user";
//mengimport provider user
import {UserProvider} from "../../providers/user/user";
//mengimport contact update page
import {ContactUpdatePage} from "../contact-update/contact-update";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  //menampung variabel(array)
  private userlist: User[] = [];
  //variabel
  private useremail: string = "";
  private userpassword: string = "";
  private name: string = "";

  constructor(public navCtrl: NavController,
              // inject provider
              public userProvider:UserProvider,
              //inject modal(pop up) untuk update data
              private modalCtrl:ModalController) {

  }

  ngOnInit() {
    this.loadUser();
  }

  //fungsi mengamil data
  loadUser() {
    //meanmpung menjadi array
    this.userlist = [];
    this.userProvider.loadUser().subscribe((result) => {
      console.log(result);
      this.userlist = result;
    });
    //tampilan console
    console.log(this.userlist);
  }

  //fungsi add user
  addUser(){
    console.log("adduser");
    //variable data berisi useremail, userpassword dan name yang dipanggil dari variable yang sudah dideklarsikan
    var data ={
      //yang ada diarray
      "useremail": this.useremail,
      "userpassword": this.userpassword,
      "name": this.name
    }
    console.log(data);
//mengamil fungsi add user dari userprovider
    this.userProvider.addUser(data).subscribe((result)=>{
      console.log(result);
      //memngambil fungski loaduser(manampilkan data ke list jika berhasil ditambah
      this.loadUser();
    });
  }

  //delete user dengan object user id
  deleteUser(userid){
    //memanggil user provider function delete user
    this.userProvider.deleteUser(userid).subscribe((result)=>{
      console.log(result);
      this.loadUser();
    });
  }

  //pop up update user use modal dengan objek data
  viewUser(data){
    //membuat modal
    var modal = this.modalCtrl.create(ContactUpdatePage, data)
    modal.onDidDismiss(()=>{
      //didalam modal terdapat data yang sudah diload menggunakan fungsi loaduser
      this.loadUser();
    })
    modal.present();
  }

}
