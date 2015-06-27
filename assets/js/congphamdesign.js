$(document).ready(function() {
    setupRotator();
});

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