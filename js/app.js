$(document).foundation();

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
  var previous = [1,4];
  $( "#timeline-slider").slider({
      value: 0,
      range: true,
      min:1,
      max:4,
      step:1,
      values:previous,
      slide: function(event, ui) {
        document.getElementById("lower-timeline").innerText = lookup[ui.values[0]];
        document.getElementById("upper-timeline").innerText = lookup[ui.values[1]];
        if (previous[0] !== ui.values[0]) {
          $("#lower-timeline").trigger("change");
          $("#lower-timeline").trigger("blur");
        } else if (previous[1] !== ui.values[1]) {
          $("#upper-timeline").trigger("change");
          $("#upper-timeline").trigger("blur");
        }
        previous[0] = ui.values[0];
        previous[1] = ui.values[1];
      }
  });
});
