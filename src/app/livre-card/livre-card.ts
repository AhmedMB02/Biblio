import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-livre-card',
  imports: [RouterLink,FormsModule,CommonModule],
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
  @Input() disponible!: boolean;

}