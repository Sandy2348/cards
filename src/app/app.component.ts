import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import {ViewChild} from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormArray, FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Posts=[{
  title:"Biking",
  ImageUrl:"assets/biking.jpeg",
  content:"I saw a biking person",
  Author:"Sandy"
},
{
  title:"Mountain",
  ImageUrl:"assets/mountain.jpeg",
  content:"I saw a mountain ",
  Author:"Max"
},
{
  title:"Tree",
  ImageUrl:"assets/tree.jpeg",
  content:"I saw a Tree ",
  Author:"David"
},

]


}
