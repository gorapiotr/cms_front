import {Component, OnInit} from '@angular/core';
import {Setting} from '../../../_models/Settings/Setting';
import {SnotifyService} from 'ng-snotify';
import {SettingsService} from '../../../_services/admin-panel/settings/settings.service';
import {SettingsPageService} from '../../../_services/page/settings/settings-page.service';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    settings: Array<Setting>;
    public error = null;
    hideLoader = false;


    constructor(protected settingsPageService: SettingsPageService,
                protected Notify: SnotifyService) {
    }

    ngOnInit() {
        this.getSettings();
    }

    getSettings() {
        this.hideLoader = false;
        this.settingsPageService.getSettings().subscribe(
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
