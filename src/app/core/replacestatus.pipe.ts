import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceStatus'
})
export class ReplaceStatusPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/_/g, ' ');
  }

}
