import { Component, Input } from '@angular/core';
import { Livre } from '../model/livre.model';

@Component({
  selector: 'app-livre-card',
  imports: [],
  standalone:true,
  templateUrl: './livre-card.html',
  styleUrl: './livre-card.css',
})
export class LivreCard {

  @Input() titre!: string;
  @Input() description!: string;
  @Input() auteur!: string;
  @Input() imagesrc!: string;
  @Input() ref!: string;

}