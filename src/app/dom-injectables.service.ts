import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

function _window() : any {
   // return the global native browser window object
   return window;
}

@Injectable()
export class DomInjectableService {
  get window() : any {
      return _window();
   }
   get document() : any {
      return this.doc;
   }
  constructor(@Inject(DOCUMENT) private doc: any) {}
  
}