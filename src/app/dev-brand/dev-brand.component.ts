/**********************************************************************
 * Filename:      dev-brand.component.ts 
 * Author:        Tech Ninja
 * Date:          May 26, 2017
 * Description:   Angular component that controls the dev-tag branding
 *                below the page footer. 
 * Credits:
 **********************************************************************/
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import $ from 'jquery';

/**********************************************************************
 * Jquery Prototype: 
 * allows for chaining: $(selector).animateRotate()
 **********************************************************************/
$.fn.animateRotate = function(angle, duration, easing, complete) {
    return this.each(function() {
        let $elem = $(this);

        $({
            deg: 0
        }).animate({
            deg: angle
        }, {
            duration: duration,
            easing: easing,
            step: function(now) {
                $elem.css({
                    transform: 'rotate(' + now + 'deg)'
                });
            },
            complete: complete || $.noop
        });
    });
};

/**********************************************************************
 * Dev-Brand Component: 
 * Angular Component decorator and exported class
 **********************************************************************/
@Component({
    selector: 'dev-brand',
    templateUrl: './dev-brand.component.html',
    styleUrls: ['./dev-brand.component.css']
})
export class DevBrandComponent implements OnInit {
    // Class Declarations
    private screenOffset: number;
    private yPos: number;
    private winHeight: number;
    private overlay: any;
    private dev_tag: any;

    // Constructor
    constructor(@Inject(DOCUMENT) private document: Document) {}

    // Window Scroll Listener
    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.screenOffset = this.document.body.scrollHeight;
        this.yPos = window.scrollY;
        this.winHeight = window.innerHeight;
        this.overlay = this.document.querySelector('.menu-overlay');
        this.dev_tag = this.document.querySelector('.dev-tag-wrapper');

        // Branding
        this.DevBrand(this.yPos, this.dev_tag, this.screenOffset, this.winHeight);
    }

    // Executes when the controller is initialized
    ngOnInit() {
        // Set the needed parameters
        this.screenOffset = this.document.body.scrollHeight;
        this.yPos = window.scrollY;
        this.winHeight = window.innerHeight;
        this.overlay = this.document.querySelector('.menu-overlay');
        this.dev_tag = this.document.querySelector('.dev-tag-wrapper');
        // Enable the dev-brand
        this.DevBrand(this.yPos, this.dev_tag, this.screenOffset, this.winHeight);
        // Dev Brand Functionality
        let dev_btn = $('.dev-link');

        // Button click listener
        dev_btn.on('click', function(e) {
            e.preventDefault();
            let chevron = '.dev-chevron';
            let dev_bar = '.dev-tag';
            rotate(chevron)
            moveUp(dev_bar)
            changeColor(chevron);
            // console.log("Clicked")
        })

        function rotate(selector) {
            $(selector).toggleClass("down");
            // console.log("Rotated", $(selector));
        }

        function moveUp(selector) {
            if ($(selector).css('height') !== '500px') $(selector).animate({
                height: '500px'
            });
            else $(selector).animate({
                height: '22px'
            });
            // console.log("Moved", $(selector).css('height'));
        }

        function changeColor(selector) {
            if ($(selector).css("color") === 'rgb(251, 168, 60)') $(selector).css("color", 'rgb(255, 255, 255)');
            else $(selector).css("color", 'rgb(251, 168, 60)');
            // console.log("Changed Color", $(selector).css("color"));
        }
    }



    private menuOverlay(yPos, overlay) {
        // Reactive Menu
        if (yPos > 100) this.setVisibility(overlay, 'visible');
        if (yPos < 100) this.setVisibility(overlay, 'hidden');
    }

    private DevBrand(yPos, dev_tag, screenOffset, win) {
        // Reactive Dev Tag
        let factor = .98;

        // console.log(["Eval", (yPos + win) > screenOffset * factor, "start val", (yPos + win), "greater than", screenOffset * factor, "Win", win]);
        if ((yPos + win) > screenOffset * factor) this.setVisibility(dev_tag, 'visible');
        if ((yPos + win) < screenOffset * factor) this.setVisibility(dev_tag, 'hidden');
    }

    private setVisibility(el, visibility) {
        return el.style.visibility = visibility;
    }
}
