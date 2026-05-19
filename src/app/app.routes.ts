import { Routes } from '@angular/router';
import { LoginUser } from './components/login/login-user/login-user';
import { Registration } from './components/registration/registration';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginUser
    },
    {
        path: 'registration',
        component: Registration
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
