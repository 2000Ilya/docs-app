import { Pipe, PipeTransform } from '@angular/core';
import { IDoc } from '../models/doc';

@Pipe({
  name: 'ceil',
})
export class CeilPipe implements PipeTransform {
  transform(totalPages: number): number {
    return Math.ceil(totalPages);
  }
}
