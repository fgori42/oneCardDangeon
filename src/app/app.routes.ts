import { Routes } from '@angular/router';
import { Home } from './screen/home/home'

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect automatico all'avvio
    { path: '**', redirectTo: '/home' } // "Catch-all": se l'utente scrive un URL a caso, torna in Home
];
