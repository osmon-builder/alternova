import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  detectChanges() {
    throw new Error('Method not implemented.');
  }

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultPosts = [];
    for (const product of value) {
      if (product.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(product);
      };
    };
    return resultPosts;
  }
  }