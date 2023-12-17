import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:any='';
  @Input() ImageUrl:any='';
  @Input() content:any='';
  @Input() Author:any='';


}
