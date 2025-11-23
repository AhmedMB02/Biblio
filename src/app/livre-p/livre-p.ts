import { Component, inject, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { LivreCard } from "../livre-card/livre-card";
import { BOOKS } from '../data/livre.data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livre-p',
  imports: [CommonModule, LivreCard,FormsModule],
  standalone: true,
  templateUrl: './livre-p.html',
  styleUrl: './livre-p.css',
})
export class LivreP implements OnInit{
 books: Livre[] = [];
 filteredBooks: Livre[] = [];

 searchTerm: string= "";
 selectedCategory: string ="Tous";

 categories: string[] = ["Tous", "Roman", "Science", "Histoire", "Enfants"];

 constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.books = this.livreService.getAllBooks();
    this.filteredBooks = this.books;
  }

  applyFilters(){
    this.filteredBooks = this.books.filter(book => {

      const matchName = book.titre
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      const matchCategory =
        this.selectedCategory === "Tous" ||
        book.categorie === this.selectedCategory;

      return matchName && matchCategory;
    });
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.applyFilters();
  }
}
