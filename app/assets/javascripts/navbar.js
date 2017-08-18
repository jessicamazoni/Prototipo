function openMenu() {
	var menu = $("[data-menu]");
	console.log(menu.css('display'));
	if (menu.css('display') == "none") {
		menu.css('display', 'block');
	}
	else {
		menu.css('display', 'none');
	}
}