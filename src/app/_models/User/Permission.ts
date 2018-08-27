import {Role} from './Role';

export class Permission {
    user_id: number;
    user_name: string;
    permissions: Array<string>;
    role: Role;

    constructor() {
        this.user_id = undefined;
        this.user_name = undefined;
        this.permissions = [];
        this.role = undefined;
    }
}
