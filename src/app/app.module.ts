import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServiceListComponent } from './services/service-list/service-list.component';

import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { ServiceItemComponent } from './services/service-list/service-item/service-item.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ProduitItemComponent } from './produits/produit-list/produit-item/produit-item.component';
import { ProduitDetailComponent } from './produits/produit-detail/produit-detail.component';
import { ServiceService } from './services/service.service';
import { ProduitService } from './produits/produit.service';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-list/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';



const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-services', component: ServicesComponent },
  { path: 'app-produits', component: ProduitsComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    ProduitsComponent,
    ServiceListComponent,
    ProduitListComponent,
    ServiceItemComponent,
    ServiceDetailComponent,
    ProduitItemComponent,
    ProduitDetailComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService, ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
