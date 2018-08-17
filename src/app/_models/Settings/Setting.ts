export class Setting {
    id: number | undefined;
    key: string;
    value: string;
    type: string;

    constructor() {
        this.id = undefined;
        this.key = undefined;
        this.value = undefined;
        this.type = undefined;
    }
}
