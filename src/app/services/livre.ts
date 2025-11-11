import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root',
})
export class LivreService {

  protected livres : Livre[];
  constructor(){
    this.livres = [
      {ref:"L1An2010",titre:"Livre 1", imagesrc:"/assests/images/bib.jpg", description:"description 1"},
      {ref:"L2An2015",titre:"Livre 2", imagesrc:"/assests/images/bib.jpg", description:"description 2"},
      {ref:"L6An2014",titre:"Livre 3", imagesrc:"/assests/images/bib.jpg", description:"description 3"},
      {ref:"L1An2011",titre:"Livre 4", imagesrc:"/assests/images/bib.jpg", description:"description 4"},
      {ref:"L3An2022",titre:"Livre 5", imagesrc:"/assests/images/bib.jpg", description:"description 5"},
      {ref:"L4An2025",titre:"Livre 6", imagesrc:"/assests/images/bib.jpg", description:"description 6"},
    ]
  }

  getBooks(){
    return this.livres;
  }
/*
  getBooksByRef(ref: string):Livre | undefined {
    return this.livres.find(Livre => Livre.ref === ref);
  }

  getBooksByName(nom: string):Livre | undefined {
    return this.livres.find(Livre => Livre.titre === nom);
  }
    */
}
