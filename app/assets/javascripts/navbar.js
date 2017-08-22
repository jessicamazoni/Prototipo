function openMenu() {
	var menu = $("[data-menu]");
	if (menu.css('display') == "none") {
		menu.css('display', 'block');
	}
	else {
		menu.css('display', 'none');
	}
}


$('[data-link] a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      targetOffset = $(id).offset().top;
      
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});

