
$(function () {
	try {
		// var pathname = window.location.hostname;
		// alert(pathname);
		$("#header").load("layouts/header.html");
		$(".footer").load("layouts/footer.html");
	}
	catch (err) {
		$("#header").load("../layouts/header.html");
		$(".footer").load("../layouts/footer.html");
		alert(err);
	}

});
		
		