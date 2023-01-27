import { Component, OnInit,Injectable } from '@angular/core';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})


export class ProductListComponentComponent implements OnInit {

   produit =[ {
    nom:"Sac Rouge",
    prix:"2500",
    categorie:"Sac",

  },
  {
    nom:"Vans",
    prix:"10000",
    categorie:"Chaussure",

  },
  {
    nom:"Mister",
    prix:"5000",
    categorie:"Parfum",

  }

]


  constructor() { }

  ngOnInit(): void {
  }

}
