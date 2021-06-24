import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertObj'
})
export class ConvertObjPipe implements PipeTransform {

  transform(objects : any = []) {
    return Object.values(objects);

  }

}
