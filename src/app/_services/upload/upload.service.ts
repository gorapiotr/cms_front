import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Upload} from '../../_models/Upload/Upload';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

    constructor(private db: AngularFireDatabase) { }

    private basePath: string = '/uploads';
    uploads: FirebaseListObservable<Upload[]>;

    pushUpload(upload: Upload) {
        let storageRef = firebase.storage().ref();
        return storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    }


    // Writes the file details to the realtime db
    private saveFileData(upload: Upload) {
        this.db.list(`${this.basePath}/`).push(upload);
    }

    deleteUpload(upload: Upload) {
        this.deleteFileData(upload.$key)
            .then( () => {
                this.deleteFileStorage(upload.name)
            })
            .catch(error => console.log(error));
    }

    // Deletes the file details from the realtime db
    private deleteFileData(key: string) {
        return this.db.list(`${this.basePath}/`).remove(key);
    }

    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    private deleteFileStorage(name:string) {
        let storageRef = firebase.storage().ref();
        storageRef.child(`${this.basePath}/${name}`).delete();
    }

    getImage(path: string) {
        const storageRef: firebase.storage.Reference = firebase.storage().ref();
        const starsRef = storageRef.child(`${this.basePath}/${path}`);
        return starsRef.getDownloadURL();
    }
}