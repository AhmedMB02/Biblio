import { Injectable } from '@angular/core';
import { BOOKS } from '../data/livre.data';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root',
})
export class LivreService {

  constructor() { }

  getAllBooks(): Livre[] {
    return BOOKS;
  }

  getBookByRef(ref: string): Livre | undefined {
    return BOOKS.find(book => book.ref === ref);
  }

}
