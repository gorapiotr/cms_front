import { Component, OnInit } from '@angular/core';
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

  constructor(
      protected settingsService: SettingsService,
      protected Notify: SnotifyService
  ) { }

  ngOnInit() {
    this.settingsService.getSettings().subscribe(
        (data) => this.settings = data,
        (error) => this.handleError(error),
        () => {
            this.hideLoader = true;
        });
  }
    handleError(error) {
        this.error = error.error;
        this.Notify.error(error);
    }

  saveChanges(setting: Setting) {
    this.settingsService.update(setting).subscribe( (data) =>{
        this.Notify.success('Updated');
    }, (error) => {
        error.errors.value.forEach(( err ) => {
            this.Notify.error(err);
        });
    });
  }

}
