import { Item } from './../models/item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], term: any): any {
    // Check if the search term is undefined
    if (term === undefined) {
      return items;
    }
    // return updated items array
    return items.filter((item) => {
      return item.ProductName.toLowerCase().includes(term.toLowerCase()) ||
      item.Barcode.toString().includes(term.toString()) ||
      item.Price.toString().includes(term.toString());
    });

  }

}
