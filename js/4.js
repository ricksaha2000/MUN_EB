$(window).on('resize', function() {
  var win = $(this);
  if (win.width() > 600) {

    $('#123').addClass('btn-lg');

  } else {
    $('#123').removeClass('btn-lg');
  }
});