import { Component } from '@angular/core';
import { DefaultLogin } from "../../components/default-login/default-login";

@Component({
  selector: 'app-login',
  imports: [DefaultLogin],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
