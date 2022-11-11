import { Injectable } from '@angular/core';
import { IDoc } from '../models/doc';
import { docs } from '../../data/docs';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  docs: IDoc[];
  constructor() {
    this.docs = docs;
    this.edit = this.edit.bind(this);
  }

  edit(id: string, docName: string, address: string) {
    console.log(
      this.docs.forEach((doc) => {
        if (doc.id === id) {
          doc.docName = docName;
          doc.address = address;
        }
      })
    );
  }

  create(doc: IDoc) {
    this.docs.push(doc);
  }
}
