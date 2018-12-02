import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-image-reduce-noise',
    templateUrl: './image-reduce-noise.component.html',
    styleUrls: ['./image-reduce-noise.component.css']
})
export class ImageReduceNoiseComponent implements OnInit {

    src = '../../../../assets/images/image-filter/house.png';
    noise_src = '../../../../assets/images/image-filter/noise_house.png';
    new_src = '../../../../assets/images/image-filter/noise_house.png';

    constructor() {
    }

    kernel = [1, 1, 1,
        1, 1, 1,
        1, 1, 1];

    kernels = [
        [
            1, 1, 1,
            1, 4, 1,
            1, 1, 1
        ],
        [
            1, 1, 1,
            1, 1, 1,
            1, 1, 1
        ],
        [
            1, 1, 1,
            1, 0, 1,
            1, 1, 1
        ],
        [
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
            1, 1, 1, 1, 1,
        ],
    ];

    kernelToProcessing = this.kernel;

    ngOnInit() {
    }

    sumAndKernel(matrix) {
        this.kernel = matrix;
        const kernelSum = this.kernel.reduce((a, b) => a + b, 0);
        this.kernelToProcessing =  this.kernel.map((x) => {
            return x * (1 / kernelSum);
        });
    }

    reduceNoise() {
        const image = new Image();
        image.src = this.noise_src;

        this.convolve(image,
            this.kernelToProcessing,
            function (error, result) {
                if (error !== null) {
                    console.error(error);
                } else {
                    // result.alt = 'Boundary';
                    // document.body.appendChild(result);
                }
            }
        );
    }

    convolve(imageIn, kernel, callback) {
        var dim = Math.sqrt(kernel.length),
            pad = Math.floor(dim / 2);

        if (dim % 2 !== 1) {
            return callback(new RangeError('Invalid kernel dimension'), null);
        }

        var w = imageIn.width,
            h = imageIn.height,
            can = document.createElement('canvas'),
            cw,
            ch,
            ctx,
            imgIn, imgOut,
            datIn, datOut;

        can.width = cw = w + pad * 2; // add padding
        can.height = ch = h + pad * 2; // add padding

        ctx = can.getContext('2d');
        ctx.fillStyle = '#000'; // fill with opaque black
        ctx.fillRect(0, 0, cw, ch);
        ctx.drawImage(imageIn, pad, pad);

        imgIn = ctx.getImageData(0, 0, cw, ch);
        datIn = imgIn.data;

        imgOut = ctx.createImageData(w, h);
        datOut = imgOut.data;

        var row, col, pix, i, dx, dy, r, g, b;

        for (row = pad; row <= h; row++) {
            for (col = pad; col <= w; col++) {
                r = g = b = 0;

                for (dx = -pad; dx <= pad; dx++) {
                    for (dy = -pad; dy <= pad; dy++) {
                        i = (dy + pad) * dim + (dx + pad); // kernel index
                        pix = 4 * ((row + dy) * cw + (col + dx)); // image index
                        r += datIn[pix++] * kernel[i];
                        g += datIn[pix++] * kernel[i];
                        b += datIn[pix] * kernel[i];
                    }
                }

                pix = 4 * ((row - pad) * w + (col - pad)); // destination index
                datOut[pix++] = (r + .5) ^ 0;
                datOut[pix++] = (g + .5) ^ 0;
                datOut[pix++] = (b + .5) ^ 0;
                datOut[pix] = 255; // we want opaque image
            }
        }

        // reuse canvas
        can.width = w;
        can.height = h;

        ctx.putImageData(imgOut, 0, 0);

        var imageOut = new Image();

        imageOut.addEventListener('load', function () {
            callback(null, imageOut);
        });

        imageOut.addEventListener('error', function (error) {
            callback(error, null);
        });

        imageOut.src = can.toDataURL('image/png');
        this.new_src = imageOut.src;
    }
}
