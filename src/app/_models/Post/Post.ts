import {User} from '../User/User';

export class Post {
    id: number | undefined;
    slug: string;
    content: string;
    lead: string;
    main_image: string;
    main_image_type: string;
    created_by: User;
    updated_by: User;

    constructor() {
        this.id = undefined;
        this.slug = undefined;
        this.content = undefined;
        this.lead = undefined;
        this.main_image = undefined;
        this.main_image_type = undefined;
        this.created_by = undefined;
        this.updated_by = undefined;
    }
}