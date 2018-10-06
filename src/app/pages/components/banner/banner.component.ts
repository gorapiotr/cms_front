import {Component, OnInit} from '@angular/core';
import {Setting} from '../../../_models/Settings/Setting';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../../_services/settings/settings.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    settings: Array<Setting>;
    public error = null;
    hideLoader = false;


    constructor(protected settingsService: SettingsService,
                protected Notify: SnotifyService) {
    }

    ngOnInit() {
        this.getSettings();
    }

    getSettings() {
        this.hideLoader = false;
        this.settingsService.getSettings().subscribe(
            (data) => {
                this.settings = data;
            },
            (error) => this.handleError(error),
            () => {
                this.hideLoader = true;
            }
        );
    }

    handleError(error) {
        this.error = error.error;
        this.Notify.error(error);
    }

}
