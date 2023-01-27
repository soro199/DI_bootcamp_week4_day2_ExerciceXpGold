import { Directive } from '@angular/core';

import { produit } from 'src/environments/environment';

@Directive({
  selector: '[appCategoryFilterDirective]'
})
export class CategoryFilterDirectiveDirective {

  constructor(private Parms: String) {

    console.log("54")
  for(let i of produit){
    console.log(i)

    if(i.categorie== this.Parms){

      console.log(produit)
    }



  }


  }

}
