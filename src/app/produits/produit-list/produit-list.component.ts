import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Produit } from './../produit.model';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  @Output() produitWasSelected = new EventEmitter<Produit>();
  produits: Produit[] = [
    new Produit('produit test', 'produit  testr2', 'produit test3'),
    new Produit('produit test2', 'produit  testr5', 'produit test4')
  ]

  onSelectedProduit(produit: Produit) {
    this.produitWasSelected.emit(produit);
  }
  ngOnInit() {
  }

}
