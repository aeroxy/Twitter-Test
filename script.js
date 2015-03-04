$(window).keypress(function(e){
  if ($('.js-first-tabstop').length == 0 && !$('#tweet-box-mini-home-profile').is(':focus')) {
    if (e.keyCode == 100) {
      if ($('.StreamItem:hover .js-actionDelete button').length == 0) {
        $('.StreamItem:hover .ProfileTweet-action--retweet button.ProfileTweet-actionButtonUndo').click();
      } else {
        $('.StreamItem:hover .dropdown .ProfileTweet-actionButton').click();
        setTimeout(function(){
          $('.StreamItem:hover .js-actionDelete button').click();
          setTimeout(function(){
            $('.delete-action').click();
          },100);
        },100);
      }
      return false;
    }
  }
});