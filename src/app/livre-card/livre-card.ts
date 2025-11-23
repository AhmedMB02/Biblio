import { Component, Input } from '@angular/core';
import { Livre } from '../model/livre.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-livre-card',
  imports: [RouterLink],
  standalone:true,
  templateUrl: './livre-card.html',
  styleUrl: './livre-card.css',
})
export class LivreCard {

  @Input() titre!: string;
  @Input() description!: string;
  @Input() cat!: string;
  @Input() auteur!: string;
  @Input() imagesrc!: string;
  @Input() ref!: string;

}