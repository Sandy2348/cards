import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if(value.gender=='f'){
return value.name;
    }
   
  }

}
