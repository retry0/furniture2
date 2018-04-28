import { Injectable } from '@angular/core';
//import http dan response
import {Http, Response} from "@angular/http";
import 'rxjs';
//import model user
import{User} from "../../model/user";

/*
  Generated class for the UserProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  //variabel menampung
  private userlist: User[] = [];

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }
//mengeload/mengambil data
  loadUser() {
    //melalui rest api yang ada pada serrver
    return this.http.get("http://localhost:8081/api/user")
      .map((response: Response) => {
        //data berupa json
          let data = response.json();
          this.userlist = data;
          return data;
        },
        (error) => console.log(error));
  }

  //fungsi tambah user
  addUser(data){
    //melalui rest api yang ada pada serrver
    var url = "http://localhost:8081/api/user";
    return this.http.post(url,data);
  }

  //function delete dengan obeject userid
  deleteUser(userid){
    //melalui rest api yang ada pada serrver
    var url = "http://localhost:8081/api/user/" + userid;
    return this.http.delete(url);
  }

  //fungsi mengubah dengan objek useid yang sebagai parameter
  updateUser(userid, data){
    //melalui rest api yang ada pada serrver
    var url ="http://localhost:8081/api/user/" + userid;
    return this.http.post(url, data);
  }


}
