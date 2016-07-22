$(document).foundation();

function aboutHeight() {
  var bio = $('#about-bio').height();
  var filters = $('#filters').height();
  var larger = bio > filters ? bio : filters;
  if (Math.abs($('#about').height() - larger) > 25) {
    $('#about').height(larger+30);
  }
};

var mySwiper = undefined;

function initSwiper() {
  /*
  How I control having Swiper appear only on mobile
  Changes only occur when the threshold is passed
  */
    var screenWidth = $(window).width();
    if(screenWidth <= 1023 && mySwiper == undefined) {
      $('.swiper-slide-duplicate').show();
      $('#about').addClass("swiper-container");
      $('#about > div:first-child').addClass("swiper-wrapper");
      $('#about > div.swiper-wrapper:first-child > div').addClass("swiper-slide");
      mySwiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 1,
          paginationClickable: false,
          spaceBetween: 0,
          loop: true
      });
    } else if (screenWidth > 1023 && mySwiper != undefined) {
      // The styles and classes below mess up the desktop interface
      $('.swiper-wrapper').removeAttr('style');
      $('.swiper-slide').removeAttr('style');
      $('#about > div.swiper-wrapper > div.swiper-slide').removeClass("swiper-slide");
      $('#about > div.swiper-wrapper').removeClass("swiper-wrapper");
      $('#about').removeClass("swiper-container");
      $('.swiper-slide-duplicate').hide();
      // Destroy
      mySwiper.destroy();
      mySwiper = undefined;
    }
}

$(document).ready(function() {
  console.log("%cLike what you see?", "color: red; font-size: x-large");
  console.log("Email me ;) ccrunner2013@gmail.com");
  var lookup = {
    1: "high school",
    2: "freshman",
    3: "sophomore",
    4: "present"
  };
  var picLookup = {
    "high school": "me_highschool",
    "freshman": "me_freshman",
    "sophomore": "me_sophomore",
    "present": "me_junior"
  };
  var newPicture = function(byId) {
    var visible = $("#crane-banner img.is-visible");
    var newlyVisible = picLookup[document.getElementById(byId).innerText];
    if (newlyVisible !== visible.id) {
      visible.removeClass("is-visible");
      visible.addClass("is-hidden");
      $("#"+newlyVisible).addClass("is-visible");
      $("#"+newlyVisible).removeClass("is-hidden");
    }
  }
  $("#lower-timeline").change(function() {
    newPicture("lower-timeline");
  });
  $("#upper-timeline").change(function() {
    newPicture("upper-timeline");
  });
  var slider = document.getElementById('timeline-slider');
  noUiSlider.create(slider, {
  	start: [1, 4],
    step: 1,
  	connect: true,
  	range: {
  		'min': 1,
  		'max': 4
  	}
  });
  slider.noUiSlider.on('update', function( values, handle ) {
    if ( !handle ) {
  		document.getElementById("lower-timeline").innerText = lookup[parseInt(values[handle])];
      $("#lower-timeline").trigger("change");
      $("#lower-timeline").trigger("blur");
  	} else {
  		document.getElementById("upper-timeline").innerText = lookup[parseInt(values[handle])];
      $("#upper-timeline").trigger("change");
      $("#upper-timeline").trigger("blur");
  	}
  });

  //Swiper plugin initialization
  initSwiper();
  aboutHeight();
  //Swiper plugin initialization on window resize
  $(window).on('resize', function(){
      initSwiper();
      aboutHeight();
  });
});
