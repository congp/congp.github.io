var CanvasUtils = (function($){
	var playgrounds = [],
      playgroundWidth = null,
      playgroundHeight = null,
      delta = 2;

	return {
		buildingPlayground: function(j){
			var placed = 0,
          maxAttempts = j*10;
      while(placed < j && maxAttempts > 0) {
        var x = Math.floor(Math.random()*playgroundWidth),
            y = Math.floor(Math.random()*playgroundHeight),
            r = Math.floor(Math.random(50,100)*10),
            available = true;
        for(var i = 0; i < playgrounds.length; i++) {
          var absX = Math.abs(playgrounds[i].x-x);
          var absY = Math.abs(playgrounds[i].y-y);
          if((absX > playgroundWidth || absY > playgroundHeight) || Math.round(Math.sqrt(Math.pow(absX, 2) + Math.pow(absY, 2))) <= (r + delta + playgrounds[i].r)) {
            available = false;
            break;
          }
        }
        if(available) {
          playgrounds.push({
            x: x,
            y: y,
            r: r,
          });
          placed += 1;
        }
        maxAttempts -= 1;
      }
      console.log(playgrounds);
		},
		draw: function(){
			var canvas = document.getElementById('canvas');

        if(canvas.getContext) {
          var ctx = canvas.getContext('2d');
          ctx.canvas.width = playgroundWidth;
          ctx.canvas.height = playgroundHeight;

          for(var i=0; i < playgrounds.length; i++) {
            ctx.beginPath();
            ctx.arc(playgrounds[i].x,playgrounds[i].y,playgrounds[i].r,0,2*Math.PI);
            ctx.closePath();
            ctx.fill();
          }
        }
		},
		init: function(){
			playgroundWidth = window.innerWidth;
			playgroundHeight = window.innerHeight;
			CanvasUtils.buildingPlayground(1000);
			CanvasUtils.draw();
		}
	}
})(jQuery);