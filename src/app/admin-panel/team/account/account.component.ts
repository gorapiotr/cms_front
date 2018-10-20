import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/admin-panel/user/user.service';
import {User} from '../../../_models/User/User';
import {NgxPermissionsService} from 'ngx-permissions';
import {ImageCroppedEvent} from 'ngx-image-cropper/src/image-cropper.component';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit, AfterViewInit {

    user: User;
    userPermissions;
    hideLoader = false;
    hideUpdateUserLoader = true;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    cropperReady = false;

    constructor(private userService: UserService,
                private permissionsService: NgxPermissionsService,) {
    }

    ngAfterViewInit() {
        this.getUserData();
    }

    ngOnInit() {
    }

    getUserData() {
        this.hideLoader = false;
        this.userService.getUserData().subscribe(
            (data) => this.user = data,
            (error) => console.log(error),
            () => {
                this.permissionsService.permissions$.subscribe((permissions) => {
                    this.userPermissions = permissions;
                    this.hideLoader = true;
                });
            });
    }

    update() {
        this.hideUpdateUserLoader = false;
        this.userService.update(this.user).subscribe((data) => {
            this.getUserData();
            this.cropperReady = false;
            this.hideUpdateUserLoader = true;
        });
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }

    onFileChanged(event) {
        this.imageChangedEvent = event;
        this.user.avatar_file = event.target.files[0];
        this.cropperReady = true;
    }

    imageCropped(event: ImageCroppedEvent) {

        const file = new File([event.file], 'image');
        this.croppedImage = event.base64;
        this.user.avatar_file = file;
    }

    imageLoaded() {
        this.cropperReady = true;
    }

    loadImageFailed() {
        console.log('Load failed');
    }
}
