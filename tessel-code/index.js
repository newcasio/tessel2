'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');

// Turn one of the LEDs on to start.
tessel.led[2].on();
// tessel.led[3].on();

// Blink!
setInterval(() => {
  tessel.led[2].toggle();
}, 1000);
setInterval(() => {
  tessel.led[3].toggle();
}, 500);

console.log("I'm blinking! (Press CTRL + C to stop)");


//run in command line with "t2 run index.js"
