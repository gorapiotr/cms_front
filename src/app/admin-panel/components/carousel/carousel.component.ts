import {AfterViewInit, Component, OnInit} from '@angular/core';
import 'jquery-ui/ui/widgets/sortable.js';
import {Carousel} from '../../../_models/Carousel';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

     carousel: Array<Carousel> =[
         new Carousel(0,"name", "alt", 1, 4, true),
         new Carousel(1,"name", "alt", 2, 3, false),
         new Carousel(2,"name", "alt", 3, 11, true),
         new Carousel(3,"name", "alt", 4, 11, true),
         new Carousel(4,"name", "alt", 2, 3, true),
         new Carousel(5,"name", "alt", 3, 4, true)
     ];



  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      $( '#sortable' ).sortable({
          axis: 'y'
      });
  }

}
