import {AfterViewInit, Component, OnInit} from '@angular/core';
import 'jquery-ui/ui/widgets/sortable.js';
import {Carousel} from '../../../../_models/Carousel/Carousel';
import {CarouselService} from '../../../../_services/carousel/carousel.service';
import {SnotifyService} from 'ng-snotify';
import {CarouselGroupService} from '../../../../_services/carousel/carousel-group.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
declare var $: any;
import {Upload} from '../../../../_models/Upload/Upload';
import {UploadService} from '../../../../_services/upload/upload.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

     carousel: Array<Carousel>;
     loadedCarousel: boolean = false;
     carouselCounter: number = 0;
     selectedFiles: FileList;
     currentUpload: Upload;
     hideLoader = false;


  constructor(protected carouselService: CarouselService,
              protected Notify: SnotifyService,
              protected route: ActivatedRoute,
              protected carouselGroupService: CarouselGroupService,
              private upSvc: UploadService

  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.carouselGroupService.getCarouselGroupById(params.carousel_group_id).subscribe(
              ( data ) => {
              this.carousel = data.data.sort((x,y) => x.position - y.position);
          },
              (error) => console.log(error),
              () => {
                  this.loadedCarousel = true;
                  this.hideLoader = true;
              });
      });
  }

  ngAfterViewInit() {
      const self = this;
      const sorted = $( "#sortable" );
      sorted.sortable({
          axis: 'y',
          update: function (event, ui) {
              const sorted = $(this).sortable('toArray');
              self.updateCarouselsPositions(sorted);
          }
      });
  }

  updateCarouselsPositions(data) {
    data.forEach( (data, index) => {
        const foundIndex = this.carousel.findIndex( (x) => x.id == data);
        this.carousel[foundIndex].position = index + 1;
    });
  }

  saveChanges() {
      this.route.params.subscribe((params: Params) => {
          this.carouselGroupService.update(this.carousel, params.carousel_group_id).subscribe((data) => {
              this.Notify.success('Updated');
          }, (error) => {
              this.Notify.error('Smothing was wrong');
          });
      });
    }

    incrementCounter() {
      this.carouselCounter++;
    }

    resetCounter() {
      this.carouselCounter = 0;
    }

    // featuredPhotoSelected(event: any) {
    //     const file: File = event.target.files[0];
    //     console.log('Selected file' + file.name);
    //
    //     const metaData = {'contentType': file.type};
    //     const storageRef: firebase.storage.Reference = firebase.storage().ref();
    //
    //     let mountainImagesRef = storageRef.child('images/mountains.jpg');
    //
    //     mountainImagesRef.put(file, metaData).then(function(snapshot) {
    //         console.log('Uploaded an array!');
    //
    //         // Create a reference to the file we want to download
    //         const starsRef = storageRef.child('images/mountains.jpg');
    //
    //         starsRef.getDownloadURL().then(function(url) {
    //             let img = document.getElementById('myimg');
    //             img.src = url;
    //         }).catch(function(error) {
    //             switch (error.code) {
    //                 console.log(error.code);
    //             }
    //         });
    //     });
    // }

    detectFiles(event) {
        this.selectedFiles = event.target.files;
    }

    uploadSingle() {
        let file = this.selectedFiles.item(0);
        this.currentUpload = new Upload(file);
        this.upSvc.pushUpload(this.currentUpload).then( (x) => {
            console.log("Updated");
            this.upSvc.getImage(this.currentUpload.file.name).then( (x) => {
                //let img = document.getElementById('myimg');
               // img.src = x;
            });
        });
    }

    getImage(path: string) {
        this.upSvc.getImage(path).then( (x) => {
            console.log(x);
            return x;
        });
    }
}
