import { Component, OnInit, Input } from '@angular/core';
import { ProduitService } from './produit.service';
import { Produit } from './produit.model';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  @Input() produitSelected: Produit;
  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.produitService.produitSelected
      .subscribe(
      (produit: Produit) => {
        this.produitSelected = produit;
      }
      )

  }

}
