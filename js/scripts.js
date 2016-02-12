var container = $('#container');
var images = $('#images');

var explosionL = $('#explosion-left');
var explosionR = $('#explosion-right');
var glass = $('#glass');

var ironman = $('#ironman');

var cta = $('#cta');
var title = $('#title');

$(function() {
  // init
// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

var tween_ironman = TweenLite.to('#ironman', 1, {
  top: -5,
  // ease: Power3.easeOut
  ease: Power2.easeOut
});
var tween_glass = TweenLite.to('#glass', 0.5, {
  top:0,
  ease: Power3.easeOut
});
var tween_explosionL = TweenLite.to('#explosion-left', 0.8, {
	top:0,
  	opacity:0.99,
  	ease: Power3.easeOut
});
var tween_explosionR = TweenLite.to('#explosion-right', 0.4, {
	top:0,
  	opacity:0.99,
  	ease: Power3.easeOut
});

var tween_title = TweenLite.to('#title', 1, {
	top:0,
	left:0
});
var tween_cta = TweenLite.to('#cta', 1, {
	top:0,
	left:0
});


// Scale Scene
var scene_ironman = new ScrollMagic.Scene({
  triggerElement: '#container',
    triggerHook: 'onEnter', 
    offset: 100,
  duration: 500
})
.setTween(tween_ironman);

var scene_glass = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(tween_glass);

var scene_explosionL = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(tween_explosionL);

var scene_explosionR = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(tween_explosionR);

var scene_title = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(tween_title);

var scene_cta = new ScrollMagic.Scene({
  triggerElement: '#container'
})
.setTween(tween_cta).addIndicators();
 
controller.addScene([
  scene_ironman,
  scene_glass,
  scene_explosionL,
  scene_explosionR,
  scene_title,
  scene_cta
]);
});