var container = document.getElementById("container");

// Percentage of the container that is scrolled past visible
var percentageViewable = function(elem) {      
  var docViewTop = document.body.scrollTop;
  // var docViewBottom = docViewTop + window.innerHeight;

  var elemMiddle = elem.offsetTop + (elem.clientHeight/2);

  var value = elemMiddle - docViewTop;
  var perc = Math.round((value * 100) / window.innerHeight);

  if (perc < 0) { return 0; }
  if (perc > 100) { return 100; }

  return perc;
};

// GSAP
tl = new TimelineLite();
tl.fromTo('#ironman', 0.1, {top:200, z:2}, {top:0, z:2}, -0.5);
tl.fromTo('#title', 0.15, {top:100, opacity:0, z:3}, {top:0, z:3, opacity:0.99},0);
tl.fromTo('#explosion_left', 0.15, {top:180, z:1}, {top:0, z:1, opacity:0.99},0);
tl.fromTo('#explosion_right', 0.2, {top:200, z:1}, {top:0, z:1, opacity:0.99},0);
tl.fromTo('#cta', 0.05, {top:100, z:3}, {top:-20, z:3},0);
tl.fromTo('#glass', 0.15, {top:100, z:3}, {top:-20, z:3},0);
// Stop from autoplaying
tl.pause();

// Update GSAP timeline based on scroll percentage
window.addEventListener( 'scroll', function() { 
  tl.pause();
  var percView = percentageViewable(container);        
  tl.progress((100-(percView))/100 );                
});

container.addEventListener('click', function(){
  window.open('http://www.google.com', '_blank');
});