import {Component, Inject, OnInit} from '@angular/core';
import { SnotifyService} from 'ng-snotify';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SliderService } from '../../../_services/slider/slider.service';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Slider} from "../../../_models/Slider/Slider";

export interface DialogData {
  firebaseConf: object;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  canvas: HTMLCanvasElement;
  context;
  public error = null;
  hideLoader = false;
  selectedFile: HTMLImageElement = null;
  slide = new Slider();
  uploadClicked = false;

  constructor(
      public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private http: HttpClient, config: NgbCarouselConfig, protected sliderService: SliderService,
      protected Notify: SnotifyService, public dialog: MatDialog) {
    // firebase.initializeApp(this.data.firebaseConf);
  }

  exit(): void {
    if(this.context) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  uploadToDB() {
    this.sliderService.update(this.slide).subscribe((data) => {
      this.Notify.success('Update succeded');
      console.log('uploaded to db');
      this.exit();
    }, (error) => {
      console.log('couldn\'t reach api to update db');
      console.log(error);
    })
  }

  onUpload() {
    this.uploadClicked = true;
    let uploader = <HTMLInputElement>document.getElementById('uploader');
    let storageRef = firebase.storage().ref('postImages/' + this.selectedFile.name);
    this.slide.file_name = this.selectedFile.name;
    this.canvas.toBlob((blob) => {
      let task = storageRef.put(blob);
      task.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot: firebase.storage.UploadTaskSnapshot) => {
            uploader.value = String((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          },
          (error) => {
            this.uploadClicked = false;
            console.log(error);
            this.Notify.error('firebase upload failed');
          },
          () => {
            console.log(this.selectedFile);
            storageRef.getDownloadURL().then((url) => {
              this.slide.image_url = url;
              this.uploadToDB();
            },(error) => {
              console.log('coudn\'t get URL');
              console.log(error);
            });
          });
    });
  }

  /* load image pointed by param_file to canvas */
  loadImage(event) {
    this.selectedFile = <HTMLImageElement>event.target.files[0];
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

// load file into canvas
    let img = new Image();
    img.src = URL.createObjectURL(this.selectedFile);
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      this.canvas.width = width;
      this.canvas.height = height;
      this.context.drawImage(img,0,0);
// replace transparent with white
      let imageData;
      try
      {
        imageData = this.context.getImageData(0, 0, width, height);
      } catch(error)
      {
        console.log('getImageData from context failed');
        console.log(error);
      }
      for (let i=0; i<height; i++)
      {
        for (let j=0; j<width; j++)
        {
          let index = (i*width+j)*4;
          if (imageData.data[index+3] == 0)
          {
            imageData.data[index+3] = 255;
            imageData.data[index] = 255;
            imageData.data[index+1] = 255;
            imageData.data[index+2] = 255;
          }
        }
      }
      this.context.putImageData(imageData, 0, 0);
      this.histogram();
    };
  }

  /* make canvas negative */
  negatyw() {
    // let url = URL.createObjectURL(this.selectedFile);
    let img = new Image();
    img.onload = () => {
      this.context.drawImage(img, 900, 500);
    };
    // img.src = url;

// read the width and height of the canvas
    let width = this.canvas.width;
    let height = this.canvas.height;

// create a new pixel array
    let imageData;
    try
    {
      imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
    } catch(e)
    {
      this.Notify.error('no image loaded');
      console.log('no image to operate on');
      console.log(e);
    }

// make nagative
    for (let i=0; i<height; i++)
      for (let j = 0; j < width; j++) {
        let index = (i * width + j) * 4;
// invert pixel
        imageData.data[index + 3] = 255;
        imageData.data[index] = 255 - imageData.data[index];
        imageData.data[index + 1] = 255 - imageData.data[index + 1];
        imageData.data[index + 2] = 255 - imageData.data[index + 2];
      }

// copy the image data back onto the canvas
    this.context.putImageData(imageData, 0, 0);
    this.histogram();
  }

  /* Convert image loaded into canvas to sepia */
  sepia() {
    let sepiaValue = Number((document.getElementById('param_sepia') as HTMLInputElement).value);

    // let url = URL.createObjectURL(this.selectedFile);
    let img = new Image();
    img.onload = () => {
      this.context.drawImage(img, 900, 500);
    };
    // img.src = url;

// read the width and height of the canvas
    let width = this.canvas.width;
    let height = this.canvas.height;

// create a new pixel array
    let imageData;
    try
    {
      imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
    } catch(e)
    {
      this.Notify.error('no image loaded');
      console.log('no image to operate on');
      console.log(e);
    }
    let index;
    let val;
    // convert to sepia
    let newImageData = this.context.createImageData(width, height);
    for (let i=0; i<height; i++)
    {
      for (let j=0; j<width; j++)
      {
        index = (i*width+j)*4;
        val = 0.299*imageData.data[index+0] + 0.587*imageData.data[index+1] + 0.114*imageData.data[index+2];
        if (val + 2 * sepiaValue > 255)
        {
          newImageData.data[index+0] = 255;
        }
        else
        {
          newImageData.data[index+0] = val + 2 * sepiaValue;
        }
        if (val + sepiaValue > 255)
        {
          newImageData.data[index+1] = 255;
        }
        else
        {
          newImageData.data[index+1] = val + sepiaValue;
        }
        newImageData.data[index+2] = val;
        newImageData.data[index+3] = 255;
      }
    }

    // copy the image data back onto the canvas
    this.context.putImageData(newImageData, 0, 0);
    this.histogram();
  }

  /* make solarization on loaded image */
  solarization() {
    let luminanceValue = Number((document.getElementById('param_luminancja') as HTMLInputElement).value);
    let img = new Image();
    img.onload = () => {
      this.context.drawImage(img, 900, 500);
    };

    let width = this.canvas.width;
    let height = this.canvas.height;

    // create a new pixel array
    let imageData;
    try
    {
      imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
    } catch(e)
    {
      this.Notify.error('no image loaded');
      console.log('no image to operate on');
      console.log(e);
    }

    // prepare LUT table
    let LUT: Array<number> = [];
    for (let i=0; i<luminanceValue; i++)
    {
      LUT[i] = i;
    }
    for (let i=luminanceValue; i<256; i++)
    {
      LUT[i] = 255-i;
    }

    this.showLUT(LUT);

    let index;
    // make solarization
    let newImageData = this.context.createImageData(width, height);
    for (let i=0; i<height; i++)
    {
      for (let j=0; j<width; j++)
      {
        index = (i*width+j)*4;
        newImageData.data[index+3] = 255;
        newImageData.data[index+0] = LUT[imageData.data[index+0]];
        newImageData.data[index+1] = LUT[imageData.data[index+1]];
        newImageData.data[index+2] = LUT[imageData.data[index+2]];
      }
    }

    // copy the image data back onto the canvas
    this.context.putImageData(newImageData, 0, 0);
    this.histogram();
  }

  gamma() {
    let gammaValue = Number((document.getElementById('param_gamma') as HTMLInputElement).value);
    let img = new Image();
    img.onload = () => {
      this.context.drawImage(img, 900, 500);
    };

    let width = this.canvas.width;
    let height = this.canvas.height;

    // create a new pixel array
    let imageData;
    try
    {
      imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
    } catch(e)
    {
      this.Notify.error('no image loaded');
      console.log('no image to operate on');
      console.log(e);
    }

    let LUT = new Array(255);
    for (let i=0; i<256; i++)
    {
      let newValue = Math.floor(255*Math.pow(i/255.0, 1/gammaValue));
      if (newValue > 255)
        LUT[i] = 255;
      else
        LUT[i] = newValue;
    }

    this.showLUT(LUT);

    // make gamma correction
    let index;
    let newImageData = this.context.createImageData(width, height);
    for (let i=0; i<height; i++)
    {
      for (let j=0; j<width; j++)
      {
        index = (i*width+j)*4;
        newImageData.data[index+3] = 255;
        newImageData.data[index+0] = LUT[imageData.data[index+0]];
        newImageData.data[index+1] = LUT[imageData.data[index+1]];
        newImageData.data[index+2] = LUT[imageData.data[index+2]];
      }
    }

    // copy the image data back onto the canvas
    this.context.putImageData(newImageData, 0, 0);
    this.histogram();
  }

  /* draw chart with LUT values */
  showLUT(LUT) {
    let lutCanvas = <HTMLCanvasElement>document.getElementById('lut_canvas');
    lutCanvas.width = 150;
    lutCanvas.height = 150;
    // clear previous
    lutCanvas.width = lutCanvas.width;
    let lutCtx = lutCanvas.getContext('2d');
    // draw texts
    lutCtx.font = '10pt Arial';
    lutCtx.fillStyle = 'black';
    lutCtx.textBaseline = 'top';
    lutCtx.textAlign = 'center';
    lutCtx.fillText('LUT', 65, 10);
    lutCtx.font = '8pt Arial';
    lutCtx.fillText('0', 8, 120);
    lutCtx.fillText('255', 8, 0);
    lutCtx.fillText('0', 25, 140);
    lutCtx.fillText('255', 135, 140);
    // draw vertical arrow
    lutCtx.moveTo(20, 130);
    lutCtx.lineTo(20, 0);
    lutCtx.lineTo(17, 5);
    lutCtx.lineTo(20, 0);
    lutCtx.lineTo(23, 5);
    lutCtx.stroke();
    lutCtx.moveTo(20, 130);
    // draw horizontal arrow
    lutCtx.moveTo(20, 130);
    lutCtx.lineTo(150, 130);
    lutCtx.lineTo(145, 133);
    lutCtx.lineTo(150, 130);
    lutCtx.lineTo(145, 127);
    lutCtx.stroke();
    // draw chart
    lutCtx.moveTo(20, 130);
    for (let i=0; i<256; i++)
    {
      lutCtx.lineTo(20+i/2, 130-LUT[i]/2);
    }
    lutCtx.stroke();
  }

  histogram() {
    let img = new Image();
    img.onload = () => {
      this.context.drawImage(img, 900, 500);
    };

    let width = this.canvas.width;
    let height = this.canvas.height;

    // create a new pixel array
    let imageData;
    try
    {
      imageData = this.context.getImageData(0, 0, width, height) as HTMLImageElement;
    } catch(e)
    {
      this.Notify.error('no image loaded');
      console.log('no image to operate on');
      console.log(e);
    }

// arrays with results
    var r = new Array(255);
    var g = new Array(255);
    var b = new Array(255);
    for (var i=0; i<256; i++)
    {
      r[i] = 0;
      g[i] = 0;
      b[i] = 0;
    }

// calculate histogram
    let index;
    for (var i=0; i<height; i++)
    {
      for (var j=0; j<width; j++)
      {
        index = (i*width+j)*4;
        r[imageData.data[index+0]]++;
        g[imageData.data[index+1]]++;
        b[imageData.data[index+2]]++;
      }
    }

//find max value
    var maxValue = 0;
    for (var i=0; i<256; i++)
    {
      if (maxValue < r[i]) maxValue = r[i];
      if (maxValue < g[i]) maxValue = g[i];
      if (maxValue < b[i]) maxValue = b[i];
    }

// show histogram
    var histogramCanvas = <HTMLCanvasElement>document.getElementById("histogram_canvas");
    histogramCanvas.width = 355;
    histogramCanvas.height = 200;
// clear previous
    histogramCanvas.width = histogramCanvas.width;
    var histogramCtx = histogramCanvas.getContext("2d");
// draw texts
    histogramCtx.font = "10pt Arial";
    histogramCtx.fillStyle = "black";
    histogramCtx.textBaseline = "top";
    histogramCtx.textAlign = "center";
    histogramCtx.fillText("Histogram", 140, 10);
    histogramCtx.font = "8pt Arial";
    histogramCtx.fillText("0", 8, 120);
    histogramCtx.fillText(maxValue.toString(), 8, 20);
    histogramCtx.fillText("0", 25, 160);
    histogramCtx.fillText("255", 265, 160);
// draw vertical arrow
    histogramCtx.moveTo(20, 150);
    histogramCtx.lineTo(20, 0);
    histogramCtx.lineTo(17, 5);
    histogramCtx.lineTo(20, 0);
    histogramCtx.lineTo(23, 5);
    histogramCtx.stroke();
    histogramCtx.moveTo(20, 150);
// draw horizontal arrow
    histogramCtx.moveTo(20, 150);
    histogramCtx.lineTo(280, 150);
    histogramCtx.lineTo(275, 153);
    histogramCtx.lineTo(280, 150);
    histogramCtx.lineTo(275, 147);
    histogramCtx.stroke();
// draw r
    histogramCtx.strokeStyle = "rgba(255,0,0,0.33)";
    histogramCtx.beginPath();
    histogramCtx.moveTo(20, 150);
    for (var i=0; i<256; i++)
    {
      histogramCtx.lineTo(20+i, 150-(130.0*r[i]/maxValue));
    }
    histogramCtx.stroke();
// draw g
    histogramCtx.strokeStyle = "rgba(0,255,0,0.33)";
    histogramCtx.beginPath();
    histogramCtx.moveTo(20, 150);
    for (var i=0; i<256; i++)
    {
      histogramCtx.lineTo(20+i, 150-(130.0*g[i]/maxValue));
    }
    histogramCtx.stroke();
// draw b
    histogramCtx.strokeStyle = "rgba(0,0,255,0.33)";
    histogramCtx.beginPath();
    histogramCtx.moveTo(20, 150);
    for (var i=0; i<256; i++)
    {
      histogramCtx.lineTo(20+i, 150-(130.0*b[i]/maxValue));
    }
    histogramCtx.stroke();
  }

}
