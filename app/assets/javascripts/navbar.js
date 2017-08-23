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

   	if (screen.width < 992) {
   		$("[data-menu]").css('display', 'none');
   	}
      
  	$('html, body').animate({ 
    	scrollTop: targetOffset
  	}, 500);
});
