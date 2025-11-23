import { Routes } from '@angular/router';
import {Home} from './home/home';
import { Contact } from './contact/contact';
import { LivreP } from './livre-p/livre-p';

export const routes: Routes = [
    {path : '',component : Home},
    {path : 'contact',component : Contact},
    {path : 'livres' , component : LivreP},

];
