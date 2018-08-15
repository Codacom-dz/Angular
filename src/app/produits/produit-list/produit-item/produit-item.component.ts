import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../../produit.model';
import { ProduitService } from './../../produit.service';
@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.css']
})
export class ProduitItemComponent implements OnInit {
  @Input() produit: Produit;

  constructor(private produitService: ProduitService) { }

  onSelected() {
    this.produitService.produitSelected.emit(this.produit);
  }

  ngOnInit() {
  }

}
