import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Setting} from '../../../_models/Settings/Setting';
import {SettingsService} from '../../../_services/admin-panel/settings/settings.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit,AfterViewChecked {

    settings: Array<Setting>;
    public error = null;
    hideLoader = false;
    updateSettingsLoader = [];

    selectedFile: File;
    url: string = '';


    constructor(protected settingsService: SettingsService,
                protected Notify: SnotifyService,
                private cdRef:ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getSettings();
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
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
        console.log(setting);
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

    saveChangesBoolean(setting: Setting) {
        if (setting.value == 'true') {
            setting.value = 'false';
        } else {
            setting.value = 'true';
        }
        this.saveChanges(setting);
    }

    onFileChanged(event, setting) {
        setting.file = event.target.files[0];
    }
}
