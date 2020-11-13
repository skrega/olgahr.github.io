$(function(){
    $('.consulting__info-button').on('click', function(){
        $('.consulting__info-button').toggleClass('hidden');
        $('.consulting__info-details').toggleClass('visible');
        
    });
    $('.about__info-button').on('click', function(){
        $('.about__info-button').toggleClass('hidden');
        $('.about__info-stages').toggleClass('visible');
        
    });
    
    $('[data-fancybox="gallery"]').fancybox({
        toolbar: false,
        infobar: false
    });

    $('#header__menu-btn').click(function(){
		$(this).toggleClass('open');
		$('.header__menu').toggleClass('open');
    });

    $('.main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $(".form__input-phone").mask("+7 (999) 999-99-99");
});