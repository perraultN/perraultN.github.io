$(document).ready(function(){
   const divClasses = [ '.a', '.b', '.c', '.d' ];

  divClasses.forEach(function(element, index) {

    setTimeout(function() {
      const currentClass = $(element);
      animateDiv(currentClass)
    });
  });


});

const $container = $('.container');
const $image = $('img');
const $header = $('header');

function makeNewPosition(){

    var h = $container.height() - $image.height();
    var w = $container.width() - $image.width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function calcSpeed(prev, next) {

var x = Math.abs(prev[1] - next[1]);
var y = Math.abs(prev[0] - next[0]);

var greatest = x > y ? x : y;

var speedModifier = 0.03;

var speed = Math.ceil(greatest/speedModifier);

return speed;

};

function animateDiv(myclass){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    $(myclass).animate(
      { top: newq[0] + $header.height(), left: newq[1] },
      speed, 'linear',
      function(){
      animateDiv(myclass);
    });
};
