import { Injectable } from '@angular/core';
import { IDoc } from '../models/doc';
import { docs } from '../../data/docs';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor() {}

  docs: IDoc[] = docs;

  create(doc: IDoc) {
    this.docs.push(doc);
  }
}
