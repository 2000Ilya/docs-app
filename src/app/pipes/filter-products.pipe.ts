import { Pipe, PipeTransform } from '@angular/core';
import { IDoc } from '../models/doc';

@Pipe({
  name: 'filterProducts',
})
export class FilterDocsPipe implements PipeTransform {
  transform(docs: IDoc[], search: string): IDoc[] {
    if (search.length === 0) return docs;
    return docs.filter((p) =>
      p.docName.toLowerCase().includes(search.toLowerCase())
    );
  }
}
