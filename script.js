var scrollWaarde;
var laatstePositie = 0;
var navMenu = $('nav');
var menuHoogte = navMenu.outerHeight();

function verschuifMenu() {
    scrollWaarde = $(this).scrollTop();
    if(scrollWaarde > laatstePositie) {
        //we scrollen naar beneden
        console.log('we scrollen naar beneden');
        laatstePositie = scrollWaarde;
        navMenu.css('top', -menuHoogte + 'px');
    } else {
        //haal het menu
        console.log('haal het menu');
        laatstePositie = scrollWaarde;
        navMenu.css('top', 0);
    }
    
    console.log(scrollWaarde);
}

$(window).on('scroll', verschuifMenu);