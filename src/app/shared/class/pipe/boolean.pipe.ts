import { Pipe, PipeTransform } from '@angular/core';
import {Setting} from '../../../_models/Settings/Setting';


@Pipe({
    name: 'booleanfilter',
    pure: false
})
export class BooleanPipe implements PipeTransform {
    transform(items: any[]): any {
        items = items.map( (x) => {
            x.value === 'true' ? x.value = '1' : x.value = '0';
            return x;
        });
        return items;
    }
}
