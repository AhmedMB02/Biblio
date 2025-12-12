import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Livre } from '../../model/livre.model';
import { LivreService } from '../../services/livre.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  books: Livre[] = [];
  bookForm: FormGroup;
  isEditing = false;
  showForm = false;

  constructor(private livreService: LivreService, private fb: FormBuilder, private authService: AuthService) {
    this.bookForm = this.fb.group({
      ref: ['', Validators.required],
      titre: ['', Validators.required],
      categorie: ['', Validators.required],
      auteur: ['', Validators.required],
      description: ['', Validators.required],
      descriptionLong: [''],
      imagesrc: [''],
      disponible: [true]
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  logout() {
    this.authService.logout();
  }

  loadBooks() {
    this.books = this.livreService.getAllBooks();
  }

  openAddForm() {
    this.isEditing = false;
    this.showForm = true;
    this.bookForm.reset({ disponible: true });
  }

  openEditForm(book: Livre) {
    this.isEditing = true;
    this.showForm = true;
    this.bookForm.patchValue(book);
  }

  closeForm() {
    this.showForm = false;
    this.bookForm.reset();
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const bookData: Livre = this.bookForm.value;

      if (this.isEditing) {
        this.livreService.updateBook(bookData);
      } else {
        this.livreService.addBook(bookData);
      }

      this.loadBooks();
      this.closeForm();
    }
  }

  deleteBook(ref: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.livreService.deleteBook(ref);
      this.loadBooks();
    }
  }
}
