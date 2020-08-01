// event link

$('.page-scroll').on('click', function(){

// ambil isi a herf

var t = $(this).attr('href');

// tangkap elemen 

var tj = $(t);

// pindahkan scroll
$('body').animate({
	scrollTop:tj.offset().top
});

e.preventDefault();

});
