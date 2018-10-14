import {User} from '../User/User';

export class Post {
    id: number | undefined;
    slug: string;
    content: string;
    lead: string;
    title: string;
    main_image: string;
    main_image_type: string;
    main_image_file: File;
    created_by: User;
    created_at: string;
    updated_by: User;

    constructor() {
        this.id = undefined;
        this.slug = undefined;
        this.content = undefined;
        this.lead = undefined;
        this.title = undefined;
        this.main_image = undefined;
        this.main_image_type = undefined;
        this.created_by = undefined;
        this.created_at = undefined;
        this.updated_by = undefined;
        this.main_image_file = undefined;
    }
}