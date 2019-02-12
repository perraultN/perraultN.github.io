$(document).ready(function(){

  const divClasses = [ '.a', '.b', '.c', '.d' ];
  const $container = $('.container');
  const $size1 = $('.size1');
  const $size2 = $('.size2')
  const $videos = $('video');
  const $video1 = $('.video1');
  const $video2 = $('.video2');
  const $video3 = $('.video3');
  const $video4 = $('.video4');
  const $image1 = $('.a');
  const $image2 = $('.b');
  const $image3 = $('.c');
  const $image4 = $('.d');
  const $screenShots = $('.screenShot');
  const $return = $('.button');

  divClasses.forEach(function(element, index) {
    setTimeout(function() {
    const currentClass = $(element);
    animateDiv(currentClass)
    });
  });

  function makeNewPosition(){
      var h = $container.height();
      var w = $container.width();
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      return [nh,nw];
  };

  function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = 0.05;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  };

  function animateDiv(myclass){
      var newq = makeNewPosition();
      var oldq = $('.a').offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      $(myclass).animate(
        { top: newq[0], left: newq[1] },
        speed, 'linear',
        function(){
        animateDiv(myclass);
      });
  };

  $image1.on('click', () => {
      $screenShots.hide(10000);
      $video1.show(10000);
      $return.show(10000);
    })

  $image2.on('click', () => {
      $screenShots.hide(10000);
      $video2.show(10000);
      $return.show(10000);
    })

  $image3.on('click', () => {
      $screenShots.hide(10000);
      $video3.show(10000);
      $return.show(10000);
    })

  $image4.on('click', () => {
      $screenShots.hide(10000);
      $video4.show(10000);
      $return.show(10000);
    })

  $return.on('click', () => {
    $videos.hide(10000);
    $return.hide(10000);
    $screenShots.show(10000);
  })

});
