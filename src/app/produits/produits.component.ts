import { Component, OnInit, Input } from '@angular/core';
import { Produit } from './produit.model';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  @Input() produitSelected: Produit;
  constructor() { }

  ngOnInit() {
  }

}
