import { Injectable } from '@angular/core';
import { IDoc } from '../models/doc';
import { docs } from '../../data/docs';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  docs: IDoc[];

  constructor() {
    const docsFromStorage = localStorage.getItem('docs');
    if (docsFromStorage) {
      this.docs = JSON.parse(docsFromStorage);
    } else {
      this.docs = docs;
      localStorage.setItem('docs', JSON.stringify(docs));
    }
    this.edit = this.edit.bind(this);
  }

  edit(id: string, docName: string, address: string) {
    this.docs.forEach((doc) => {
      if (doc.id === id) {
        doc.docName = docName;
        doc.address = address;
      }
    });
    localStorage.setItem('docs', JSON.stringify(this.docs));
  }

  create(doc: IDoc) {
    this.docs.push(doc);
    localStorage.setItem('docs', JSON.stringify(this.docs));
  }
}
