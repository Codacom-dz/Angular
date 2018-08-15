import { Component, OnInit } from '@angular/core';
import { Produit } from './../produit.model';
import { ProduitService } from './../produit.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitService) {

  }
  ngOnInit() {
    this.produits = this.produitService.getProduit();
  }




}
