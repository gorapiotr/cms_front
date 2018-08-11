export class Carousel {
    id: number | undefined;
    name: string;
    alt: string;
    position: number | undefined;
    author: number | undefined;
    active: boolean;


    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.alt = undefined;
        this.position = undefined;
        this.author = undefined;
        this.active = undefined;
    }
}
