import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'm2h'
})
export class MinToHours implements PipeTransform {
  transform(value: number): string {
    if (value == null) {
      return 0 + ' minutes ago';
    } else if (value === 1) {
      return value + ' minute ago';
    } else if (value < 60) { 
      return value + ' minutes ago';
    } else if (value === 60) {
      return value/60 + ' hour ago'
    } else {
      return value/60 + ' hours ago';
    }
  }
}