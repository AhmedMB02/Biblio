import { Component, inject, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { LivreCard } from "../livre-card/livre-card";
import { BOOKS } from '../data/livre.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livre-p',
  imports: [CommonModule, LivreCard],
  standalone: true,
  templateUrl: './livre-p.html',
  styleUrl: './livre-p.css',
})
export class LivreP implements OnInit{
 books: Livre[] = [];

 constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.books = this.livreService.getAllBooks();
  }
}
