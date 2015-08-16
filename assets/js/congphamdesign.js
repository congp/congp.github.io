$(document).ready(function() {
  $('.post-title, .feature-image').addClass('show');
  setupRotator();
  coffeeStat();
});

var copies = [
    '<span class="primary-color">391.2g</span> of coffee were consumed during the making of this site.',
    '<span class="primary-color">5,750ml</span> of water were boiled during the making of this site.',
    '<span class="primary-color">20</span> cups of coffee were brewed during the making of this site.',
    '<span class="primary-color">00</span> children were exploited during the making of this site.',
    '<span class="primary-color">195.6</span> minutes were spent grinding beans during the making of this site.',
    '<span class="primary-color">495</span> LEGO bricks were <a class="primary-color" href="https://instagram.com/p/3problHR9_/?taken-by=congphammm">used</a> during the making of this site.',
    '<span class="primary-color">125,806</span> steps were recorded during the making of this site.',
    '<span class="primary-color">13,693</span> points were earned during the making of this site.',
    '<span class="primary-color">47,379.6</span> calories were burned during the making of this site.',
    '<span class="primary-color">118.08</span> hours were spent sleeping during the making of this site.',
];

function footerCopy(randomNumber) {

    var theChosenOne = copies[randomNumber];
    var year = new Date().getFullYear()

    $('.copywriting').html(theChosenOne + '<br/>&copy;' + year + ' Cong');
}

function coffeeStat() {
    var explodedCup = $('.footer img').data('hover');
    var normalCup = $('.footer img').data('normal');

    $('.footer figure').mouseenter(function(e){
        e.preventDefault();
        var randomNumber = Math.floor(Math.random()*copies.length);
        footerCopy(randomNumber);
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
