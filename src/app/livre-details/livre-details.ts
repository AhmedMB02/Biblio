import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { AuthService } from '../services/auth.service';
import { Livre } from '../model/livre.model';
import { CommonModule } from '@angular/common';
import { LoginModal } from '../login-modal/login-modal';

@Component({
  selector: 'app-livre-details',
  imports: [CommonModule, RouterLink, LoginModal],
  standalone: true,
  templateUrl: './livre-details.html',
  styleUrl: './livre-details.css',
})
export class LivreDetails implements OnInit {

  livre: Livre | undefined;
  // Flag pour contrôler l'affichage du modal de connexion
  showLoginModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const ref = this.route.snapshot.paramMap.get('id');
    if (ref) {
      this.livre = this.livreService.getBookByRef(ref);
    }
  }

  /**
   * Gestion de l'action de réservation.
   * Vérifie si l'utilisateur est connecté et si le livre est disponible.
   */
  onReserve(): void {
    if (!this.livre) return;

    // Vérification de l'authentification - afficher le modal si non connecté
    if (!this.authService.currentUserValue) {
      this.showLoginModal = true;
      return;
    }

    // Vérification de la disponibilité du livre
    if (this.livre.disponible) {
      const success = this.livreService.reserveBook(this.livre.ref, this.authService.currentUserValue.username);
      if (success) {
        alert('Livre réservé avec succès !');
        // Le changement sera reflété dans l'interface car nous modifions l'objet par référence
      } else {
        alert('Erreur lors de la réservation.');
      }
    } else {
      alert('Ce livre n\'est plus disponible.');
    }
  }

  /**
   * Ferme le modal de connexion
   */
  closeLoginModal(): void {
    this.showLoginModal = false;
  }

  /**
   * Appelé après une connexion réussie depuis le modal
   * Tente automatiquement de réserver le livre
   */
  onLoginSuccess(): void {
    this.showLoginModal = false;
    // Réessayer la réservation maintenant que l'utilisateur est connecté
    this.onReserve();
  }
}
