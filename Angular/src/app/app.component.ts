import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  baseUrl = "https://localhost:7286/api/";
  accountBaseUrl = this.baseUrl + "Account/";
  constructor(public http: HttpClient){}
  async register(){
    let registerData = {
      email : "autre2@test.com",
      password : "Passw0rd!",
      passwordConfirm : "Passw0rd!",
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Register', registerData));
    console.log(result);
  }

  async connect(){
    let registerData = {
      username : "autre2@test.com",
      password : "Passw0rd!"
    }
    let result = await lastValueFrom(this.http.post<any>(this.accountBaseUrl + 'Login', registerData));
    console.log(result);
  }

  async privateRequest(){
    let options = { withCredentials:true };
    let result = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'PrivateData', options));
    console.log(result);
  }

  async publicRequest(){
    let result = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'PublicData'));
    console.log(result);
  }

  async logout(){
    let result = await lastValueFrom(this.http.get<any>(this.accountBaseUrl + 'Logout'));
    console.log(result);
  }

}
