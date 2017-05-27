import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [{
          width: '100%',
          height: '100%',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '100%',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }];
  
      this.galleryImages = [
          {
              small: 'https://lorempixel.com/180/100',
              medium: 'https://lorempixel.com/540/300',
              big: 'https://lorempixel.com/900/500'
          },
          {
              small: 'https://lorempixel.com/180/100',
              medium: 'https://lorempixel.com/540/300',
              big: 'https://lorempixel.com/900/500'
          },
          {
              small: 'https://lorempixel.com/180/100',
              medium: 'https://lorempixel.com/540/300',
              big: 'https://lorempixel.com/900/500'
          }
      ];
  }

}
