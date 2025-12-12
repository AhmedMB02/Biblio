import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Track the logged-in user object, or null if not logged in
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

    // Helper for simple boolean checks
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }

    get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    constructor(private router: Router) {
        // Initialize session from localStorage if present
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const user: User = JSON.parse(storedUser);
            this.currentUserSubject.next(user);
            this.loggedIn.next(true);
        }
    }

    /**
     * Tente de connecter un utilisateur.
     * @param user Le nom d'utilisateur
     * @param pass Le mot de passe
     * @param shouldNavigate Si true, redirige l'utilisateur après connexion (défaut: true)
     * @returns true si la connexion est réussie, false sinon
     */
    login(user: string, pass: string, shouldNavigate: boolean = true): boolean {
        // Admin Login
        if (user === 'admin' && pass === 'admin') {
            const adminUser: User = { username: 'admin', role: 'admin' };
            this.currentUserSubject.next(adminUser);
            this.loggedIn.next(true);
            localStorage.setItem('currentUser', JSON.stringify(adminUser));
            if (shouldNavigate) {
                this.router.navigate(['/admin-dashboard']);
            }
            return true;
        }

        // Mock User Login
        // In a real app, this would check against a database
        if (user === 'ahmed' && pass === '1234') {
            const normalUser: User = { username: 'ahmed', role: 'user' };
            this.currentUserSubject.next(normalUser);
            this.loggedIn.next(true);
            localStorage.setItem('currentUser', JSON.stringify(normalUser));
            // Navigate to the user dashboard
            if (shouldNavigate) {
                this.router.navigate(['/dashboard']);
            }
            return true;
        }

        return false;
    }

    /**
     * Déconnecte l'utilisateur actuel et le redirige vers la page d'accueil
     */
    logout() {
        this.currentUserSubject.next(null);
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
        // Rediriger vers la page d'accueil après déconnexion
        this.router.navigate(['/']);
    }
}
