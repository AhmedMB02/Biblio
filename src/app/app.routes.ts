import { Routes } from '@angular/router';
import {Home} from './home/home';
import { Contact } from './contact/contact';
import { LivreP } from './livre-p/livre-p';
import { LivreCard } from './livre-card/livre-card';

export const routes: Routes = [
    {path : '',component:Home},
    {path : 'contact',component:LivreCard},
    {path : 'livres' , component:LivreP},

];
