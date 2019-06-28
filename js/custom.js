
if ($('.navbar-toggler').attr('aria-expanded') === "true")
  {
    $(".navbar-port").addClass("active");
  }

  function test() {
    alert("Page is loaded");
}
$('#navbarCollapse').collapse({
  
  alert("hello");
})


jQuery(document).ready(function() {
  
   
  var btn = $('#toTop');

  $(window).scroll(function() {

    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $(".navbar-port").addClass("active");

    } else {
        $(".navbar-port").removeClass("active");
            
    }

    if (scroll > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
        return false;
  });


});


  
AOS.init({

    	offset: 200, 
    	duration: 1000,

    });

AOS.refresh();



  



