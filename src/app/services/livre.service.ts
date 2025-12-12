import { Injectable } from '@angular/core';
import { BOOKS } from '../data/livre.data';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root',
})
export class LivreService {

  constructor() { }

  getAllBooks(): Livre[] {
    return BOOKS;
  }

  getBookByRef(ref: string): Livre | undefined {
    return BOOKS.find(book => book.ref === ref);
  }

  addBook(book: Livre): void {
    BOOKS.push(book);
  }

  updateBook(updatedBook: Livre): void {
    const index = BOOKS.findIndex(b => b.ref === updatedBook.ref);
    if (index !== -1) {
      BOOKS[index] = updatedBook;
    }
  }

  deleteBook(ref: string): void {
    const index = BOOKS.findIndex(b => b.ref === ref);
    if (index !== -1) {
      BOOKS.splice(index, 1);
    }
  }

  /**
   * Reserver un livre pour un utilisateur specifique.
   * La reservation n'est possible que si le livre est disponible.
   */
  reserveBook(ref: string, username: string): boolean {
    const book = this.getBookByRef(ref);
    if (book && book.disponible) {
      book.disponible = false;
      book.reservedBy = username;
      this.updateBook(book);
      return true;
    }
    return false;
  }

  /**
   * Recuperer les livres empruntes ou reserves par un utilisateur.
   */
  getBooksByUser(username: string): Livre[] {
    return BOOKS.filter(book => book.reservedBy === username || book.borrowedBy === username);
  }

  /**
   * Annuler la reservation d'un livre.
   * Remet le livre comme disponible et supprime l'information de reservation.
   */
  cancelReservation(ref: string, username: string): boolean {
    const book = this.getBookByRef(ref);
    if (book && book.reservedBy === username) {
      book.disponible = true;
      book.reservedBy = undefined;
      this.updateBook(book);
      return true;
    }
    return false;
  }
}
