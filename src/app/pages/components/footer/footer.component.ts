import {Component, OnInit} from '@angular/core';
import {SnotifyService} from 'ng-snotify';
import {SettingsPageService} from '../../../_services/page/settings/settings-page.service';
import {Setting} from '../../../_models/Settings/Setting';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
