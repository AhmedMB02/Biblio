import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-dashboard.html',
    styleUrls: ['./user-dashboard.css']
})
export class UserDashboard implements OnInit {
    myBooks: Livre[] = [];
    currentUser: User | null = null;

    constructor(
        private livreService: LivreService,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
            if (user) {
                this.loadMyBooks(user.username);
            }
        });
    }

    loadMyBooks(username: string) {
        this.myBooks = this.livreService.getBooksByUser(username);
    }

    // Helper to check if it's a reservation or a loan (though for now mostly reservation)
    getStatus(book: Livre): string {
        if (book.borrowedBy === this.currentUser?.username) {
            return 'Emprunté';
        } else if (book.reservedBy === this.currentUser?.username) {
            return 'Réservé';
        }
        return 'Inconnu';
    }

    /**
     * Annule la reservation d'un livre.
     * @param book Le livre dont on veut annuler la reservation
     */
    cancelReservation(book: Livre): void {
        if (!this.currentUser) return;

        if (confirm(`Voulez-vous vraiment annuler la réservation de "${book.titre}" ?`)) {
            const success = this.livreService.cancelReservation(book.ref, this.currentUser.username);
            if (success) {
                alert('Réservation annulée avec succès !');
                // Recharger la liste des livres
                this.loadMyBooks(this.currentUser.username);
            } else {
                alert('Erreur lors de l\'annulation de la réservation.');
            }
        }
    }

    /**
     * Vérifie si un livre peut être annulé (seulement les réservations, pas les emprunts)
     */
    canCancel(book: Livre): boolean {
        return book.reservedBy === this.currentUser?.username;
    }
}
