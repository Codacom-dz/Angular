import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Produit } from '../../produit.model';
@Component({
  selector: 'app-produit-item',
  templateUrl: './produit-item.component.html',
  styleUrls: ['./produit-item.component.css']
})
export class ProduitItemComponent implements OnInit {
  @Input() produit: Produit;
  @Output() produitSelected = new EventEmitter<void>();

  onSelected() {
    this.produitSelected.emit();
  }

  ngOnInit() {
  }

}
