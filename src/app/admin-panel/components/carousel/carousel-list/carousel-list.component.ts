import {Component, OnInit} from '@angular/core';
import {CarouselGroupService} from '../../../../_services/carousel/carousel-group.service';
import {CarouselGroup} from '../../../../_models/Carousel/CarouselGroup';

@Component({
    selector: 'app-carousel-list',
    templateUrl: './carousel-list.component.html',
    styleUrls: ['./carousel-list.component.css']
})
export class CarouselListComponent implements OnInit {

    carouselGroup: Array<CarouselGroup>;
    hideLoader = false;

    constructor(protected carouselGroupService: CarouselGroupService) {
    }

    ngOnInit() {
        this.carouselGroupService.getCarouselGroups().subscribe(
            (data) => {
                this.carouselGroup = data.data;
            },
            (error) => console.log(error),
            () => {
                this.hideLoader = true;
            });
    }

}
