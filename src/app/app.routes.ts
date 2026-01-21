import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { SignUp } from './pages/signup/signup';

export const routes: Routes = [
    {
        path:"login",
        component:Login
    },
     {
        path:"signup",
        component:SignUp
    }
];
