import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: number[] | string[], directions: 'asc' | 'des' = 'asc') {
    const sorted =  [...value];
    sorted.sort((a, b) => {
      if (directions === 'asc') {
       return  a > b ? 1 : -1;
      } else {
       return  a > b ? -1: 1;
      }
    });
    return sorted;
  }
}
