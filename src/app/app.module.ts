/**********************************************************************
 * Primary App Dependencies
 **********************************************************************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgxGalleryModule } from 'ngx-gallery';

/**********************************************************************
 * App Components
 **********************************************************************/
import { DevBrandComponent } from './dev-brand/dev-brand.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { ContactComponent } from './home/contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ParticlesComponent } from './home/particles/particles.component'

/**********************************************************************
 * App Services
 **********************************************************************/
import { DomInjectableService } from './dom-injectables.service';
import { ParseApiService } from './parse-api/parse-api.service';

/**********************************************************************
 * Primary App Module
 **********************************************************************/
@NgModule({
  declarations: [
    AppComponent,
    DevBrandComponent,
    HomeComponent,
    SliderComponent,
    ContactComponent,
    NavigationComponent,
    GalleryComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'wyf-app'}),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [DomInjectableService, ParseApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
