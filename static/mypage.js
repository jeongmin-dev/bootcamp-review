$(function() {
    let w = $(window),
      footerHei = $('footer').outerHeight(),
      banner = $('#banner');
  
    w.on('scroll', function() {
  
      let sT = w.scrollTop();
      let val = $(document).height() - w.height() - footerHei;
  
      if (sT >= val) {
          banner.addClass('on')
      }else{
          banner.removeClass('on')
      }
    });
  });