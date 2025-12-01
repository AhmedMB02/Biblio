import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livre-details',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './livre-details.html',
  styleUrl: './livre-details.css',
})
export class LivreDetails implements OnInit {

  livre: Livre | undefined;

  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService
  ) { }

  ngOnInit(): void {
    const ref = this.route.snapshot.paramMap.get('id');
    if (ref) {
      this.livre = this.livreService.getBookByRef(ref);
    }
  }

  onReserve(): void {
    alert('Fonctionnalité de réservation bientôt disponible !');
  }

}
