import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Produit } from './../produit.model';
import { ProduitSrevice } from './../produit.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  @Output() produitWasSelected = new EventEmitter<Produit>();
  produits: Produit[];
  constructor(private produitService: ProduitSrevice) {

  }
  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }
  onSelectedProduit(produit: Produit) {
    this.produitWasSelected.emit(produit);
  }


}
