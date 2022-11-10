import { Pipe, PipeTransform } from '@angular/core';
import { IDoc } from '../models/doc';

@Pipe({
  name: 'paginateDocs',
})
export class PaginateDocsPipe implements PipeTransform {
  transform(docs: IDoc[], currentPage: number, pageSize: number): IDoc[] {
    return docs.filter(
      (doc, i) =>
        (currentPage - 1) * pageSize <= i &&
        (currentPage - 1) * pageSize + pageSize > i
    );
  }
}
