import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], filterdata: any): any {
    if (!items) return [];
    if (!filterdata) return items;
    filterdata = filterdata.toString().toLowerCase();
    return items.filter(it => {
      if (filterdata) {
       return  (it.id == filterdata || it.email.toLowerCase().includes(filterdata));
      }
    });
  }

}
