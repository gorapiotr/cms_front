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

    // constructor(id, name, alt, position, author, active) {
    //     this.id = id;
    //     this.name = name;
    //     this.alt = alt;
    //     this.position = position;
    //     this.author = author;
    //     this.active = active;
    // }
}
