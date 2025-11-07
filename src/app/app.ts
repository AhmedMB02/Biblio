import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  //protected readonly title = signal('biblio');
  ngOnInit() {
    AOS.init({
      duration: 800, // durée anim
      easing: 'ease-in-out', // style
      once: true, // animé 1 seule fois
    });
  }
}
