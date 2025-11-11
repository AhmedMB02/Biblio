import { Component, inject, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre';

@Component({
  selector: 'app-livre-p',
  imports: [],
  templateUrl: './livre-p.html',
  styleUrl: './livre-p.css',
})
export class LivreP implements OnInit{
  ngOnInit(): void {
  }

  livres: Livre[] = [];
  livreService! : LivreService ;

  constructor(){

  }
}
