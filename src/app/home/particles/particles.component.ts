import { Component, Inject, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomInjectableService } from '../../dom-injectables.service';
import $ from 'jquery/dist/jquery';

import { Particle, TWO_PI, _Math as M } from './particle';

import * as Sketch from '../../../assets/vendor/sketch';

@Component({
  selector: 'wyf-particles',
  template: `<div class="particles-container"></div>`,
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
  @ViewChild('container') private container: ElementRef;
  
  constructor(private dom: DomInjectableService) {}
   

  @HostListener("window:scroll", [])
    onWindowScroll() {
  }

/**********************************************************************
 * Component Initialization Function
 **********************************************************************/
  ngOnInit() { 

    // ----------------------------------------
    // Example
    // ----------------------------------------
    
    let MAX_PARTICLES = 280;
    let COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
    
    let particles = [];
    let pool = [];

    console.log("Sketch?", Sketch);
    
    let demo = Sketch.create({
        container: document.getElementsByClassName( 'particles-container' )[0]
    });
    
    demo.setup = function() {
    
        // Set off some initial particles.
        let i, x, y;
    
        for ( i = 0; i < 20; i++ ) {
            x = ( demo.width * 0.5 ) + M.random( -100, 100 );
            y = ( demo.height * 0.5 ) + M.random( -100, 100 );
            demo.spawn( x, y );
        }
    };
    
    demo.spawn = function( x, y ) {
    
        if ( particles.length >= MAX_PARTICLES )
            pool.push( particles.shift() );
    
        let particle = pool.length ? pool.pop() : new Particle();
        particle.init( x, y, M.random( 5, 40 ) );
    
        particle.wander = M.random( 0.5, 2.0 );
        particle.color = M.random( COLOURS );
        particle.drag = M.random( 0.9, 0.99 );
    
        let theta = M.random( TWO_PI );
        let force = M.random( 2, 8 );
    
        particle.vx = Math.sin( theta ) * force;
        particle.vy = Math.cos( theta ) * force;
    
        particles.push( particle );
    }
    
    demo.update = function() {
    
        let i, particle;
    
        for ( i = particles.length - 1; i >= 0; i-- ) {
    
            particle = particles[i];
    
            if ( particle.alive ) particle.move();
            else pool.push( particles.splice( i, 1 )[0] );
        }
    };
    
    demo.draw = function() {
    
        demo.globalCompositeOperation  = '';
        
        for ( let i = particles.length - 1; i >= 0; i-- ) {
            particles[i].draw( demo );
        }
    };
    
    demo.mousemove = function() {
    
        let particle, theta, force, touch, max, i, j, n;
    
        for ( i = 0, n = demo.touches.length; i < n; i++ ) {
    
            touch = demo.touches[i], max = M.random( 1, 4 );
            for ( j = 0; j < max; j++ ) demo.spawn( touch.x, touch.y );
        }
    };
  }    
}
