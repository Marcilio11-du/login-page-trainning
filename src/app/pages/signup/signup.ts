import { Component } from '@angular/core';
import { DefaultLogin } from "../../components/default-login/default-login";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';

interface SignupForm {
  email: FormControl,
  password: FormControl,
  confirmPassword: FormControl,
  name: FormControl,
}

@Component({
  selector: 'app-signup',
  imports: [
    DefaultLogin,
    ReactiveFormsModule,
    PrimaryInput,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class SignUp {
  signupform!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
      this.signupform = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      })
  }

  submitLogin() {
    console.log(this.signupform.value);
    this.loginService.signUp(
      this.signupform.value.name,
      this.signupform.value.email,
      this.signupform.value.password
    ).subscribe({
      next: () => alert("Login successful"),
      error: () => alert("Login failed")
    }
    )
  }

  navigate() {
    this.router.navigate(["login"]);
  }
}
