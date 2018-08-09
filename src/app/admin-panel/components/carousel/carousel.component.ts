import {AfterViewInit, Component, OnInit} from '@angular/core';
import 'jquery-ui/ui/widgets/sortable.js';
import {Carousel} from '../../../_models/Carousel';
import {CarouselService} from '../../../_services/carousel/carousel.service';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

     carousel: Array<Carousel>;



  constructor(protected carouselService: CarouselService) { }

  ngOnInit() {
        this.carouselService.getCarousels().subscribe( ( data ) => this.carousel = data.data);
  }

  ngAfterViewInit() {
      const self = this;
      const sorted = $( "#sortable" );
      sorted.sortable({
          axis: 'y',
          update: function (event, ui) {
              let sorted = $(this).sortable('toArray');
              self.updateCarouselsPositions(sorted);
          }
      });
  }

    updateCarouselsPositions(data) {
        data.forEach( (data, index) => {
            let foundIndex = this.carousel.findIndex( (x) => x.id == data);
            this.carousel[foundIndex].position = index+1;
        });
    }


}
