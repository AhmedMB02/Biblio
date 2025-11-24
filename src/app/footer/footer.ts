import { Component } from '@angular/core';
import { Router, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(private router: Router){}

  goToAdmin() {
    this.router.navigate(['/admin-login']);
  }
}
