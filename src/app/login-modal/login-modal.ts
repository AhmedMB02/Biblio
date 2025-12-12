import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login-modal',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login-modal.html',
    styleUrls: ['./login-modal.css']
})
export class LoginModal {
    // Émetteurs d'événements pour communiquer avec le composant parent
    @Output() closeModal = new EventEmitter<void>();
    @Output() loginSuccess = new EventEmitter<void>();

    // Données du formulaire
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService) { }

    /**
     * Gère la soumission du formulaire de connexion
     */
    onSubmit(): void {
        this.errorMessage = '';

        // Vérification des champs vides
        if (!this.username || !this.password) {
            this.errorMessage = 'Veuillez remplir tous les champs.';
            return;
        }

        // Tentative de connexion via le service d'authentification
        // shouldNavigate = false car nous gérons la navigation depuis le composant parent
        const success = this.authService.login(this.username, this.password, false);

        if (success) {
            // Si la connexion réussit, émettre l'événement de succès et fermer le modal
            this.loginSuccess.emit();
            this.close();
        } else {
            // Afficher un message d'erreur si les identifiants sont incorrects
            this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
        }
    }

    /**
     * Ferme le modal
     */
    close(): void {
        this.closeModal.emit();
    }
}
