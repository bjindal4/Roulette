'use strict';

var dat = require( 'dat-gui' );
var gui = new dat.GUI();

// Prevent collision with Chrome Dev Tools FPS Meter.
var style = gui.domElement.style;
style.left = 0;
style.right = 'initial';
style.float = 'left';

exports.color = function( color, name ) {
  name = name || 'color';

  var options = {};

  options[ name ] = [
    color.r * 255,
    color.g * 255,
    color.b * 255
  ];

  gui.addColor( options, name )
    .listen()
    .onChange(function( value ) {
      color.r = value[0] / 255;
      color.g = value[1] / 255;
      color.b = value[2] / 255;
    });
};

exports.material = function( material ) {
  exports.color( material.color, 'color' );
  exports.color( material.emissive, 'emissive' );
};

exports.light = function( light ) {
  exports.color( light.color, 'color' );
  gui.add( light, 'intensity', 0, 8 );
  gui.add( light.position, 'x', -8, 8 );
  gui.add( light.position, 'y', -8, 8 );
  gui.add( light.position, 'z', -8, 8 );
};

exports.spring = function( spring ) {
  gui.add( spring, 'k', 10, 480, 10 );
  gui.add( spring, 'b', 1, 48 );
};
