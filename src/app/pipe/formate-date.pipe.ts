import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateDate'
})
export class FormateDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
