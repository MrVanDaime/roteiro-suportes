$( document ).ready( function(){
	$( ".issi-slider" ).slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		centerMode: false,
		draggable: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				}
			},
		],
	});
});