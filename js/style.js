var loading = function () {
	$('.line.top').addClass('leaveT');
	$('.line.bottom').addClass('leaveB');
	$('.positionZero').css('animation-name', 'none');
	$('.positionZero').delay(3500).fadeOut(500);
};

$(document).ready(function () {
	setTimeout(function () { loading(); }, 4000);

	var Today = new Date();
	var age = Today.getFullYear() - 1994;
	$("#copyright").html("<p>Copyright &copy;" + Today.getFullYear() + " Lancer All Rights Reserved.</p>");
	$("#age").html('年齡：' + age);
});