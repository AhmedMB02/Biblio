import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { LivreP } from './livre-p/livre-p';
import { AdminLogin } from './admin/admin-login/admin-login';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { LivreDetails } from './livre-details/livre-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'livres', component: LivreP },
    { path: 'admin-login', component: AdminLogin },
    { path: 'admin-dashboard', component: AdminDashboard },
    { path: 'livre-details/:id', component: LivreDetails }

];