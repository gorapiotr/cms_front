export class User {
    id: number | undefined;
    name: string;
    email: string;
    avatar: string;
    avatar_type: string;
    avatar_file: File;


    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.email = undefined;
        this.avatar = undefined;
        this.avatar_type = undefined;
        this.avatar_file = undefined;
    }
}
