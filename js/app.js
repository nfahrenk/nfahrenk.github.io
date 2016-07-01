$(document).foundation();

var toggleChangingInterest = function() {
  setTimeout(function() {
    var selected = $(".is-visible");
    selected.removeClass("is-visible");
    selected.addClass("is-hidden");
    if (selected.next().length > 0) {
      selected.next().addClass("is-visible");
      selected.next().removeClass("is-hidden");
    } else {
      $("#crane-banner img:first-child").addClass("is-visible");
      $("#crane-banner img:first-child").removeClass("is-hidden");
    }
    toggleChangingInterest();
  }, 2000);
};

$(document).ready(function() {
  toggleChangingInterest();
});
