$(document).ready(function() {
    setupRotator();
    coffeeStat();
    footerCopy();
});

function footerCopy() {
    var copies = [
        '<span class="primary-color">391.2g</span> of coffee were consumed during the making of this site.',
        '<span class="primary-color">5,750ml</span> of water were boiled during the making of this site.',
        '<span class="primary-color">20</span> cups of coffee were brewed during the making of this site.'
    ];

    var theChosenOne = copies[Math.floor(Math.random()*copies.length)];

    $('.copywriting').html(theChosenOne + '<br/>&copy; 2015 Cong');
}

function coffeeStat() {
    var explodedCup = $('.footer img').data('hover');
    var normalCup = $('.footer img').data('normal');

    $('.footer figure').mouseenter(function(e){
        e.preventDefault();
        $('.footer img').attr("src", explodedCup);
    });

    $('.footer figure').mouseleave(function(e){
        e.preventDefault();
        $('.footer img').attr("src", normalCup);
    });
}

function setupRotator() {
    if ($('.rand-item').length > 1) {
        $('.rand-item:first').addClass('current').fadeIn(500);
        var interval = setInterval('textRotate()', 5000);
    }
}

function textRotate() {
    var current = $('.rand > .current');
    if (current.next().length == 0) {
        current.removeClass('current').fadeOut(500);
        current.dequeue();
        $('.rand-item:first').addClass('current').fadeIn(500);
    } else {
        current.removeClass('current').fadeOut(500);
        current.dequeue();
        current.next().addClass('current').fadeIn(500);
    }
}

window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > 20 ? 'add': 'remove'
  ]('scrolled');
});