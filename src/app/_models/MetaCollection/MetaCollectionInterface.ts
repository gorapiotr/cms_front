export class MetaCollectionInterface {

    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;

    constructor(response?: any) {
        if (response) {
            this.current_page = response.current_page;
            this.from = response.from;
            this.last_page = response.last_page;
            this.per_page = response.per_page;
            this.to = response.to;
            this.total = response.total;
        }else{
            this.current_page = 1;
            this.from = 0;
            this.last_page = 0;
            this.per_page = 0;
            this.to = 0;
            this.total = 0;
        }
    }
}
