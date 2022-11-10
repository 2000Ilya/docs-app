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
    this.sort = this.sort.bind(this);
  }

  sort(isSortFromNew: boolean) {
    this.docs.sort((doc1, doc2) => {
      if (isSortFromNew) {
        return Number(new Date(doc2.docDate)) - Number(new Date(doc1.docDate));
      } else {
        return Number(new Date(doc1.docDate)) - Number(new Date(doc2.docDate));
      }
    });
  }

  create(doc: IDoc) {
    this.docs.push(doc);
  }
}
