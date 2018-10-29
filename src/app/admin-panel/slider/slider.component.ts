import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
     selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    providers: [NgbCarouselConfig]
})

export class SliderComponent {
    images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    showNavigationArrows = false;
    showNavigationIndicators = false;

    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 5000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = true;
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
}