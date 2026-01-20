import { Component } from '@angular/core';
import { DefaultLogin } from "../../components/default-login/default-login";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [
    DefaultLogin,
    ReactiveFormsModule,
    PrimaryInput,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
  }

  submitLogin() {
    console.log(this.loginForm.value);
    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe({
      next: () => console.log("Login successful"),
      error: () => console.log("Login failed")
    }
    )
  }

  navigate() {
    this.router.navigate(["signup"]);
  }
}
