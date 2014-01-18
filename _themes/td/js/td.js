$(document).ready(function(){
      $(".fancybox").fancybox();

        // Video rescaling fix : http://www.netmagazine.com/tutorials/create-fluid-width-videos

      // Find all YouTube videos
      var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='//www.youtube.com'], iframe[src^='http://new.livestream.com'], iframe[src^='http://embed.spotify.com']"),
       
          // The element that is fluid width
          $fluidEl = $(".show-notes");
       
      // Figure out and save aspect ratio for each video
      $allVideos.each(function() {
       
        $(this)
          .data('aspectRatio', this.height / this.width)
       
          // and remove the hard coded width/height
          .removeAttr('height')
          .removeAttr('width');
       
      });
       
      // When the window is resized
      $(window).resize(function() {
       
        var newWidth = $fluidEl.width();
       
        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
       
          var $el = $(this);
          $el
            .width(newWidth)
            .height(newWidth * $el.data('aspectRatio'));
       
        });
       
      // Kick off one resize to fix all videos on page load
      }).resize();

      // Prettyprint and line numbers on all pre elements

      $(".show-notes pre").addClass("prettyprint linenums");

      // Huffduff it!

      $("#huffduffer").click(function() {
            window.open('http://huffduffer.com/add?popup=true&page='+encodeURIComponent(location.href),'huffduff','scrollbars=1,status=0,resizable=1,location=0,toolbar=0,width=360,height=480');
      });
});