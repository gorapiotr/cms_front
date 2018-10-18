import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
     selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig]
})

export class SliderComponent implements OnInit {

    showNavigationArrows = false;
    showNavigationIndicators = false;
    images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

    constructor(config: NgbCarouselConfig, private _http: HttpClient) {
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }

    ngOnInit() {
    }

}
