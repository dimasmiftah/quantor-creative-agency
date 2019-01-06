$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	// Navbar
	if ( wScroll > $('.about').offset().top -660 ) {
		$('nav').css({
			backgroundColor : 'white',
			boxShadow : '0px 1px 15px rgba(1,1,1,.5)'

		});
		$('nav a').css('color', '#FE2154');
	} else {
		$('nav').css({
			background: 'transparent',
			boxShadow : 'none'
		}); 	
		$('nav a').css('color', 'white');
		$('nav a:hover').css('color', '#454D7A');

	}
});

const container = document.querySelector('.gallery');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function  (e) {
	if (e.target.className == 'thumb') {
		//ganti gambar
		jumbo.src = e.target.src;

		//efek fade
		jumbo.classList.add('fade');
		setTimeout(function  () {
			jumbo.classList.remove('fade');
		},500);

		//efek aktif
		thumbs.forEach(function  (thumb) {
			thumb.classList.remove('active');
		}) 
		e.target.classList.add('active');
	}; 
});


$('.page-scroll').click(function(event) {

	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan).offset().top; 
	
	$('body, html').animate({
		scrollTop: elemenTujuan
	}, 1250, 'swing');

	event.preventDefault();
});