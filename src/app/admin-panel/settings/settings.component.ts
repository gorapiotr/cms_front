import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../_services/settings/settings.service';
import {Setting} from '../../_models/Settings/Setting';
import {SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    settings: Array<Setting>;
    public error = null;
    hideLoader = false;
    updateSettingsLoader = [];

    selectedFile: File;
    url: string = '';


    constructor(protected settingsService: SettingsService,
                protected Notify: SnotifyService) {
    }

    ngOnInit() {
        this.getSettings();
    }

    getSettings()
    {
        this.hideLoader = false;
        this.settingsService.getSettings().subscribe(
            (data) => {
                this.settings = data;
                this.settings.forEach( ( setting ) => {
                    this.updateSettingsLoader[setting.key] = false;
                });
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

    saveChanges(setting: Setting) {
        this.updateSettingsLoader[setting.key] = true;
        this.settingsService.update(setting).subscribe((data) => {
            this.Notify.success('Updated');
            this.getSettings();
            this.updateSettingsLoader[setting.key] = false;
        }, (error) => {
            error.errors.value.forEach((err) => {
                this.Notify.error(err);
            });
        });
    }

    onFileChanged(event, setting) {
        setting.file = event.target.files[0];
    }
}
