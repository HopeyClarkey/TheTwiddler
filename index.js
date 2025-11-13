$(() => {
  const $page = $('#all-contents');

  const $tweetsDiv = $('<div class="tweets"></div>');

  $page.append($tweetsDiv);
// put the add tweet to page logic into a function
function addNewTweets(){
   const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div class="tweet"></div>');
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);
    //will need to make username clickable ,
    //  so the username needs to be in it's own tag
    //username will need a click handler, put it inside the function
    return $tweet;
  });

  $tweetsDiv.append($tweets);
  }

  //look up .html method will help remove elements
});


/*This is a mostly empty repo, with a file that creates some data that represents twitter users and their tweets
 It's the data that you would expect to see if you had created a twitter account and followed a few people, with more tweets
 appearing over time.
 that file is called 'data-generator-js.
*/