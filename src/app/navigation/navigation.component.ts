import { Component, Inject, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DomInjectableService } from '../dom-injectables.service';
import $ from 'jquery';


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


@Component({
  selector: 'wyf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @ViewChild('container') private container: ElementRef;
  public navLinks: Array<any>;
  private screenOffset: number;
  private yPos: number;
  private menu: any;
  private menuDefaults: any;
  private logoContainer: any;
  private defaultLogo: any;
  private enabled: boolean = false;
  private dropped: boolean = false;
  private state: string;
  
  constructor(private pageScrollService: PageScrollService, 
      private dom: DomInjectableService, private router: Router) {
    // Page Scroll Configurations
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 500;

    // Navigation Links
    this.navLinks = [{
      name: 'Home',
      href: 'home',
      hash: ''
    },{
      name: 'About',
      href: 'home',
      hash: '#about-anchor'

    },{
      name: 'Gallery',
      href: 'home',
      hash: '#gallery-anchor'

    },{
      name: 'Services',
      href: 'home',
      hash: '#services-anchor'

    },{
      name: 'Contact',
      href: 'home',
      hash: '#contact-anchor'
    }];

  }

/**********************************************************************
 * Window Scroll Functions
 **********************************************************************/
  public scrollTo(link: any): void {
      let pageScrollInstance: PageScrollInstance;

      if (link.href != '') new Promise((res, reject)=>{
        pageScrollInstance = PageScrollInstance.simpleInstance(this.dom.document, link.hash);
        this.router.navigate([link.href])
      }).then(()=>{
        this.pageScrollService.start(pageScrollInstance);
      });
      else new Promise((res, reject)=>{
        this.router.navigate([link.href], {fragment: link.hash})
      }).then(()=>{
        pageScrollInstance = PageScrollInstance.simpleInstance(this.dom.document, link.hash);
      }).then(()=>{
        this.pageScrollService.start(pageScrollInstance);
      }); 
  };

  @HostListener("window:scroll", [])
    onWindowScroll() {
      this.screenOffset = document.body.offsetHeight;
      this.yPos = window.scrollY;
      this.menu = $('.navigation');

      // Begin Menu Toggler
      this.toggleMenu();
  }

/**********************************************************************
 * Component Initialization Function
 **********************************************************************/
  ngOnInit() { 
    this.screenOffset = document.body.offsetHeight;
    this.yPos = window.scrollY;
    this.menu = $('.navigation');
    this.menuDefaults = {
      top: this.menu.css('top'),
      left: this.menu.css('left'),
      width: this.menu.css('width'),
      height: this.menu.css('height')
    };
    this.logoContainer = this.menu.find('.logo-container').eq(0);
    this.defaultLogo = this.logoContainer.html();
    
    this.enabled = false;
    this.dropped = this.menu.css('position') === 'fixed';
    
    this.toggleMenu();

    // if not homepage, make logo text readable
    let href = this.dom.window.location.href.split('/');
    let notHomePage = href[href.length -1] != 'home';
    if (notHomePage) this.getLogo().setTextLogo();

  }    
  
  // public scrollSomewhereHorizontally(): void {
  //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.dom.document, scrollTarget: '#targetToTheRight', verticalScrolling: false});
  //     this.pageScrollService.start(pageScrollInstance);
  // }; 

  // public goToHeadingInContainer(): void {
  //     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.dom.document, scrollTarget: '#head3', scrollingViews: [this.container.nativeElement]});
  //     this.pageScrollService.start(pageScrollInstance);
  // };



/**********************************************************************
 * Dom Functions
 **********************************************************************/
  private toggleMenu()  {
    let offset: number = parseInt(this.menu.css('height').replace('px', '')) - 20;

    if (this.yPos >= this.screenOffset + offset && !this.dropped) 
      this.setNavState('on');
    else if (this.yPos < this.screenOffset + offset && this.dropped) 
      this.setNavState('off'); 
    // else { this.setNavState('off') console.log(['condition:', this.screenOffset + offset && this.dropped, ['properties', [this.yPos, this.screenOffset, offset, this.dropped]]]) }

  }

  private getLogo() {
    let newLogo = $('<span></span>').css({
        position: 'absolute',
        top: '10px',
        left: '40px',
        color: 'white'
    }).html('WaleYaFoto');

    newLogo.setTextLogo = ()=>this.logoContainer.html(newLogo);
    newLogo.setDefaultLogo = ()=>this.logoContainer.html(this.defaultLogo);

    return newLogo;
  }

  private setNavState( state ) {
    let logo = this.getLogo();

    if (state === 'on' && !this.dropped) 
    {
      // this.scaleNav( 'down' );
      this.menu.css('position', 'fixed')
        .css({
            top: -100,
            left: 0,
            width: '100%',
            height: this.menuDefaults.height
        })
        .animate({top: 0})
      this.dropped = true;

      logo.setTextLogo();
      // console.info("Turned on el", this.dropped);
    }

    else if (state === 'off' && this.dropped) 
    {
      // this.scaleNav( 'up' );
      this.menu.css('position', 'relative')
      .css({
          top: this.menuDefaults.top,
          width: '100%',
          height: this.menuDefaults.height
      })
      .animate({top: 0});
      this.dropped = false;

      logo.setDefaultLogo();
      // console.info("Shut off el");
    }
    // console.log("Setting State to " + state, ['dropped?', this.dropped]);
  }
}
