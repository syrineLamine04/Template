import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent {
  constructor(private router: Router) { }

  redirectToPm() {
    this.router.navigate(['/pm']); // Redirige vers le composant PmComponent
  }

  redirectToPp() {
    this.router.navigate(['/pp']); // Redirige vers le composant PpComponent
  }

}
