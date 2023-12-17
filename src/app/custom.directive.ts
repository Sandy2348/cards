import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(c:ElementRef){
    c.nativeElement.style.backgroundColor="blue";
  }

}
