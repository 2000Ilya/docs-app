import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {
  transform(value: any[], isSortFromNew = true): any[] {
    if (isSortFromNew) {
      return value.sort((doc1, doc2) => {
        return Number(new Date(doc2.docDate)) - Number(new Date(doc1.docDate));
      });
    } else {
      return value
        .sort((doc1, doc2) => {
          return (
            Number(new Date(doc2.docDate)) - Number(new Date(doc1.docDate))
          );
        })
        .reverse();
    }
  }
}
