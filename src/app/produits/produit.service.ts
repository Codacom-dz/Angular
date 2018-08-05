import { Produit } from './produit.model';
export class ProduitSrevice {
  produits: Produit[] = [
    new Produit('produit test', 'produit  testr2', 'produit test3'),
    new Produit('produit test2', 'produit  testr5', 'produit test4')
  ];

  getProduit() {
    return this.produits;
  }
}
