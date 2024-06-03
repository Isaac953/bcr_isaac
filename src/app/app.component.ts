import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropdownModule, FormsModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  selectedCity: any;
  value: any;

  title = 'BCR Isaac';

  cities!: any[];

  constructor() {}

  ngOnInit() {

    this.cities = [
      { name: 'City 1', value: 'city1' },
      { name: 'City 2', value: 'city2' },
    ]
  }
}
