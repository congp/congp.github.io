var AnimateUtils = (function($){
  return {
    bodyFadeIn: function(){
      AnimateUtils.showElements($('body'));
    },
    sunrise: function(){
      setTimeout(function(){
        AnimateUtils.showElements($('.main-headline__gradient-circle'));
      }, 500);
    },
    postTitleLoading: function(){
      $('.list-posts__title').each(function(i){
        var title = $(this);
        setTimeout(function() {
          AnimateUtils.showElements(title)
        }, 250 * i);
      });
    },
    showElements: function(e){
      e.addClass('show');
    },
    init: function(){
      AnimateUtils.bodyFadeIn();
      AnimateUtils.postTitleLoading();
      AnimateUtils.sunrise();
    }
  }
})(jQuery);
