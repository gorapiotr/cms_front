import {AfterViewInit, Component, OnInit} from '@angular/core';
import 'jquery-ui/ui/widgets/sortable.js';
import {Carousel} from '../../../_models/Carousel';
import {CarouselService} from '../../../_services/carousel/carousel.service';
import {SnotifyService} from 'ng-snotify';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

     carousel: Array<Carousel>;
     loadedCarousel: boolean = false;

  constructor(protected carouselService: CarouselService,
              protected Notify: SnotifyService,
  ) { }

  ngOnInit() {
        this.carouselService.getCarousels().subscribe( ( data ) => {
            this.carousel = data.data.sort((x,y) => x.position - y.position);
            this.loadedCarousel = true;
        });
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

  saveChanges() {
    this.carouselService.update(this.carousel).subscribe( ( data ) => {
        this.Notify.success('Updated');
    }, ( error ) => {
        this.Notify.error('Smothing was wrong');
    });
    }
}
