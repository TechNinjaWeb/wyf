import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NgbCarouselConfig ] // add NgbCarouselConfig to the component providers
})
export class AppComponent {
  title = 'app works!';

  constructor(bootstrapConfig: NgbCarouselConfig) 
  {
    bootstrapConfig.interval = 10000;
    bootstrapConfig.wrap = false;
    bootstrapConfig.keyboard = false; 
  }
}
