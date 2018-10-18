export class Setting {
    id: number | undefined;
    key: string;
    value: string;
    type: string;
    description: string;
    file: File;

    constructor() {
        this.id = undefined;
        this.key = undefined;
        this.value = undefined;
        this.type = undefined;
        this.file = undefined;
        this.description = undefined;
    }
}
