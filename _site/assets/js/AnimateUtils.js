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
    myNameHasSwag: function() {
      setInterval(function(){
        var firstName = 'CONG',
            lastName = 'PHAM',
            splittedFirstName = firstName.split(''),
            splittedLastName = lastName.split(''),
            randomFirstName = Math.floor(Math.random() * (3 - 0 + 1)) + 0,
            randomLastName = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

        $('#first-name').text(splittedFirstName[randomFirstName]);
        $('#last-name').text(splittedLastName[randomLastName]);
      },1000);
    },
    showProjectFeatureImage: function(){
      var singlePost = $('.list-posts__post');
      var projectFeatureImage = $('.project-image');
      var theImage = "";
      singlePost.hover(
        function(){
          imageData = $(this).data('image');
          theImage = $('#' + imageData);
          AnimateUtils.showElements(theImage);
          return theImage;
        },
        function(){
          AnimateUtils.hideElements(theImage);
        }
      );
    },
    showElements: function(e){
      e.addClass('show');
    },
    hideElements: function(e){
      e.removeClass('show');
    },
    init: function(){
      var duration = 30,
          display = document.getElementById('count-down-clock');
      AnimateUtils.bodyFadeIn();
      AnimateUtils.postTitleLoading();
      AnimateUtils.sunrise();
      AnimateUtils.showProjectFeatureImage();
    }
  }
})(jQuery);
