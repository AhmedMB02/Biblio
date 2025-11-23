import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Livre } from '../model/livre.model';
import { LivreCard } from "../livre-card/livre-card";
import { BOOKS } from '../data/livre.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, LivreCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  randomBooks: Livre[] = [];

  ngOnInit(): void {
    this.randomBooks = this.getRandomBooks(4)
  }

  getRandomBooks(count: number): Livre[] {
    const shuffled = [...BOOKS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}