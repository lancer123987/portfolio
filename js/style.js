var loading = function () {
	$('.line.top').addClass('leaveT');
	$('.line.bottom').addClass('leaveB');
	$('.positionZero').css('animation-name', 'none');
	$('.positionZero').delay(3500).fadeOut(500);
	$('#loading').delay(4000).hide(0);
};

$(document).ready(function () {
	$("html, body").stop().animate({
		scrollTop: 0
	});

	setTimeout(function () { loading(); }, 4000);

	var Today = new Date();
	var age = Today.getFullYear() - 1994;
	$("#copyright").html("<p>Copyright &copy;" + Today.getFullYear() + " Lancer All Rights Reserved.</p>");
	$("#age").html('年齡：' + age);

	$('.workArea').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev">◄</button>',
		nextArrow: '<button type="button" class="slick-next">►</button>',
		responsive: [
			{
				breakpoint: 768,
				dots: false,
			}
		]
	});
});