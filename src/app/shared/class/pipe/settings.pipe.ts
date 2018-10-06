import { Pipe, PipeTransform } from '@angular/core';
import {Setting} from '../../../_models/Settings/Setting';


@Pipe({
    name: 'settingsfilter',
    pure: false
})
export class SettingsPipe implements PipeTransform {
    transform(items: any[], filter: Setting): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.key.indexOf(filter.key) !== -1);
    }
}
