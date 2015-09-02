var AnimateUtils = (function($){
  return {
    bodyFadeIn: function(){
      AnimateUtils.showElements($('body'));
    },
    postTitleLoading: function(){
      $('.list-posts__title').each(function(i){
        var title = $(this)
        setTimeout(function() {
          AnimateUtils.showElements(title)
        }, 250 * i);
      });
    },
    showElements: function(e){
      e.addClass('show');
    }
  }
})(jQuery);
