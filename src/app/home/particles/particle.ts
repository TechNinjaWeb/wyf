// Global Two Pi variable
export const TWO_PI: number = Math.PI * 2;
let keyMap: any;

/**********************************************************************
 * UTILITY FUNCTIONS
 **********************************************************************/

export const _Math = {

    random: function(min, max ? ) {

        if (this.isArray(min))

            return min[~~(Math.random() * min.length)];

        if (!this.isNumber(max))

            max = min || 1, min = 0;

        return min + Math.random() * (max - min);
    },

        isArray: function(object) {

        return Object.prototype.toString.call(object) == '[object Array]';
    },

        isFunction: function(object) {

        return typeof object == 'function';
    },

        isNumber: function(object) {

        return typeof object == 'number';
    },

        isString: function(object) {

        return typeof object == 'string';
    },

        keyName: function(code) {

        return keyMap[code] || String.fromCharCode(code);
    },

        extend: function(target, source, overwrite) {

        for (var key in source)

            if (overwrite || !(key in target))

                target[key] = source[key];

        return target;
    },

        proxy: function(method, context) {

        return function() {

            method.apply(context, arguments);
        };
    },

        clone: function(target) {

        var object = {};

        for (var key in target) {

            if (key === 'webkitMovementX' || key === 'webkitMovementY')
                continue;

            if (this.isFunction(target[key]))

                object[key] = this.proxy(target[key], target);

            else

                object[key] = target[key];
        }

        return object;
    }
};

// Particle Class to export
export class Particle {
    private x: number;
    private y: number;
    private vx: number;
    private vy: number;
    private radius: number;
    private theta: number;
    private drag: number;
    private alive: boolean;
    private wander: number;
    private color: string;

    constructor() {}

    init(x, y, radius) {

        this.alive = true;

        this.radius = radius || 10;
        this.wander = 0.15;
        this.theta = _Math.random(TWO_PI);
        this.drag = 0.92;
        this.color = '#fff';

        this.x = x || 0.0;
        this.y = y || 0.0;

        this.vx = 0.0;
        this.vy = 0.0;
    }

    move() {

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= this.drag;
        this.vy *= this.drag;

        this.theta += _Math.random(-0.5, 0.5) * this.wander;
        this.vx += Math.sin(this.theta) * 0.1;
        this.vy += Math.cos(this.theta) * 0.1;

        this.radius *= 0.96;
        this.alive = this.radius > 0.5;
    }

    draw(ctx) {

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
