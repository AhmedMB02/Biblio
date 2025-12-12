import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { LoginModal } from '../login-modal/login-modal';
import { User } from '../model/user.model';


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, LoginModal],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  isDarkMode = false;
  currentUser: User | null = null;
  showLoginModal = false;
  isDropdownOpen = false;

  constructor(private authService: AuthService, private elementRef: ElementRef) {
    this.initializeTheme();
  }

  ngOnInit(): void {
    // S'abonner aux changements d'état de l'utilisateur
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  /**
   * Gère le clic sur le bouton Se connecter/Se déconnecter
   */
  toggleLogin() {
    if (this.currentUser) {
      // Si l'utilisateur est connecté, le déconnecter
      this.authService.logout();
    } else {
      // Sinon, ouvrir le modal de connexion
      this.showLoginModal = true;
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
   */
  onLoginSuccess(): void {
    this.showLoginModal = false;
    // L'utilisateur est maintenant connecté, on peut éventuellement rediriger
    // mais pour l'instant on reste sur la page actuelle
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  /**
   * Bascule l'état du dropdown utilisateur
   */
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Ferme le dropdown utilisateur
   */
  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  /**
   * Déconnecte l'utilisateur
   */
  logout(): void {
    this.authService.logout();
    this.closeDropdown();
  }

  /**
   * Détecte les clics en dehors du dropdown pour le fermer
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isDropdownOpen) {
      this.closeDropdown();
    }
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}
