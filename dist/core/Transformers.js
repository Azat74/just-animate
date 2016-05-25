"use strict";
var Helpers_1 = require('./Helpers');
function replaceCamelCased(match, p1, p2) {
    return p1 + p2.toUpperCase();
}
/**
 * Handles converting animations options to a usable format
 */
function animationTransformer(a) {
    return {
        keyframes: Helpers_1.map(a.keyframes, keyframeTransformer),
        name: a.name,
        timings: Helpers_1.extend({}, a.timings)
    };
}
exports.animationTransformer = animationTransformer;
/**
 * Handles transforming short hand key properties into their native form
 */
function keyframeTransformer(keyframe) {
    var x = 0;
    var y = 1;
    var z = 2;
    // transform properties
    var scale = new Array(3);
    var skew = new Array(2);
    var translate = new Array(3);
    var output = {};
    var transform = '';
    for (var prop in keyframe) {
        var value = keyframe[prop];
        switch (prop) {
            case 'scale3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 3) {
                        throw Error('scale3d requires x, y, & z');
                    }
                    scale[x] = arr[x];
                    scale[y] = arr[y];
                    scale[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    scale[y] = value;
                    scale[z] = value;
                    continue;
                }
                throw Error('scale3d requires a number or number[]');
            case 'scale':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 2) {
                        throw Error('scale requires x & y');
                    }
                    scale[x] = arr[x];
                    scale[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    scale[y] = value;
                    continue;
                }
                throw Error('scale requires a number or number[]');
            case 'scaleX':
                if (Helpers_1.isNumber(value)) {
                    scale[x] = value;
                    continue;
                }
                throw Error('scaleX requires a number');
            case 'scaleY':
                if (Helpers_1.isNumber(value)) {
                    scale[y] = value;
                    continue;
                }
                throw Error('scaleY requires a number');
            case 'scaleZ':
                if (Helpers_1.isNumber(value)) {
                    scale[z] = value;
                    continue;
                }
                throw Error('scaleZ requires a number');
            case 'skew3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 3) {
                        throw Error('skew3d requires x, y, & z');
                    }
                    skew[x] = arr[x];
                    skew[y] = arr[y];
                    skew[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    skew[y] = value;
                    skew[z] = value;
                    continue;
                }
                throw Error('skew3d requires a number, string, string[], or number[]');
            case 'skew':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 2) {
                        throw Error('skew requires x & y');
                    }
                    skew[x] = arr[x];
                    skew[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    skew[y] = value;
                    continue;
                }
                throw Error('skew requires a number, string, string[], or number[]');
            case 'skewX':
                if (Helpers_1.isNumber(value)) {
                    skew[x] = value;
                    continue;
                }
                throw Error('skewX requires a number or string');
            case 'skewY':
                if (Helpers_1.isNumber(value)) {
                    skew[y] = value;
                    continue;
                }
                throw Error('skewY requires a number or string');
            case 'skewZ':
                if (Helpers_1.isNumber(value)) {
                    skew[z] = value;
                    continue;
                }
                throw Error('skewZ requires a number or string');
            case 'rotate3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 4) {
                        throw Error('rotate3d requires x, y, z, & a');
                    }
                    transform += " rotate3d(" + arr[0] + "," + arr[1] + "," + arr[2] + "," + arr[3] + ")";
                    continue;
                }
                throw Error('rotate3d requires an []');
            case 'rotateX':
                if (Helpers_1.isString(value)) {
                    transform += " rotate3d(1, 0, 0, " + value + ")";
                    continue;
                }
                throw Error('rotateX requires a string');
            case 'rotateY':
                if (Helpers_1.isString(value)) {
                    transform += " rotate3d(0, 1, 0, " + value + ")";
                    continue;
                }
                throw Error('rotateY requires a string');
            case 'rotate':
            case 'rotateZ':
                if (Helpers_1.isString(value)) {
                    transform += " rotate3d(0, 0, 1, " + value + ")";
                    continue;
                }
                throw Error('rotateZ requires a string');
            case 'translate3d':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 3) {
                        throw Error('translate3d requires x, y, & z');
                    }
                    translate[x] = arr[x];
                    translate[y] = arr[y];
                    translate[z] = arr[z];
                    continue;
                }
                if (Helpers_1.isString(value) || Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    translate[y] = value;
                    translate[z] = value;
                    continue;
                }
                throw Error('translate3d requires a number, string, string[], or number[]');
            case 'translate':
                if (Helpers_1.isArray(value)) {
                    var arr = value;
                    if (arr.length !== 2) {
                        throw Error('translate requires x & y');
                    }
                    translate[x] = arr[x];
                    translate[y] = arr[y];
                    continue;
                }
                if (Helpers_1.isString(value) || Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    translate[y] = value;
                    continue;
                }
                throw Error('translate requires a number, string, string[], or number[]');
            case 'translateX':
                if (Helpers_1.isString(value) || Helpers_1.isNumber(value)) {
                    translate[x] = value;
                    continue;
                }
                throw Error('translateX requires a number or string');
            case 'translateY':
                if (Helpers_1.isString(value) || Helpers_1.isNumber(value)) {
                    translate[y] = value;
                    continue;
                }
                throw Error('translateY requires a number or string');
            case 'translateZ':
                if (Helpers_1.isString(value) || Helpers_1.isNumber(value)) {
                    translate[z] = value;
                    continue;
                }
                throw Error('translateZ requires a number or string');
            case 'transform':
                transform += ' ' + value;
                break;
            default:
                var prop2 = prop.replace(/([a-z])-([a-z])/ig, replaceCamelCased);
                output[prop2] = value;
                break;
        }
    }
    // combine scale
    var isScaleX = scale[x] !== undefined;
    var isScaleY = scale[y] !== undefined;
    var isScaleZ = scale[z] !== undefined;
    if (isScaleX && isScaleZ || isScaleY && isScaleZ) {
        var scaleString = scale.map(function (s) { return s || '1'; }).join(',');
        transform += " scale3d(" + scaleString + ")";
    }
    else if (isScaleX && isScaleY) {
        transform += " scale(" + (scale[x] || 1) + ", " + (scale[y] || 1) + ")";
    }
    else if (isScaleX) {
        transform += " scaleX(" + scale[x] + ")";
    }
    else if (isScaleY) {
        transform += " scaleX(" + scale[y] + ")";
    }
    else if (isScaleZ) {
        transform += " scaleX(" + scale[z] + ")";
    }
    else {
    }
    // combine skew
    var isskewX = skew[x] !== undefined;
    var isskewY = skew[y] !== undefined;
    if (isskewX && isskewY) {
        transform += " skew(" + (skew[x] || 1) + ", " + (skew[y] || 1) + ")";
    }
    else if (isskewX) {
        transform += " skewX(" + skew[x] + ")";
    }
    else if (isskewY) {
        transform += " skewX(" + skew[y] + ")";
    }
    else {
    }
    // combine translate
    var istranslateX = translate[x] !== undefined;
    var istranslateY = translate[y] !== undefined;
    var istranslateZ = translate[z] !== undefined;
    if (istranslateX && istranslateZ || istranslateY && istranslateZ) {
        var translateString = translate.map(function (s) { return s || '1'; }).join(',');
        transform += " translate3d(" + translateString + ")";
    }
    else if (istranslateX && istranslateY) {
        transform += " translate(" + (translate[x] || 1) + ", " + (translate[y] || 1) + ")";
    }
    else if (istranslateX) {
        transform += " translateX(" + translate[x] + ")";
    }
    else if (istranslateY) {
        transform += " translateX(" + translate[y] + ")";
    }
    else if (istranslateZ) {
        transform += " translateX(" + translate[z] + ")";
    }
    else {
    }
    if (transform) {
        output.transform = transform;
    }
    return output;
}
exports.keyframeTransformer = keyframeTransformer;
