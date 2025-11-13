$(() => {
  const $page = $('#all-contents');
  // this variable represents a jQ OBJECT that contains the main content div with the ID all-Contents.
  // This div will be used to hold all the content of the page.

  const $tweetsDiv = $('<div class="tweets"></div>');
  // this variable represents a JQ object that contains a div with the class tweets. This div will be used to hold
  //all of the tweet elements.

//BARE MINIMUM REQUIREMENTS:

//A
//Show the new user tweets somehow. You can show them automatically as they are created every 10 seconds, or create a button
//that displays new tweets. The button should have an id of new-tweets-button. New Tweets should be added to the top of the 
//list of tweets. All tweets in the streams.home array should be displayed. There is a container div that has the class tweets
//that you can append the tweets to. Each tweet should hav ethe class tweet and should be appended to the tweets container.

//B
// Display the timestamp of when the tweets were created. This timestamp should reflect the ACTUAL date and time the tweets were
//created, and not just be hardcoded. For example: April 24th, 2024, 3:15pm. The timestamps should be in its own tag with the 
//class 'timestamp'

//C
// allow the user to click on any username to see that users timeline. The user should be able to get back to the home timeline
//somehow. The username should be in it's own tag with the class 'username'

//D
//Show when the tweets were created in a human-friendly way (e.g. 10 minutes ago). You'll want to use a library to do this work for you.
// a popular library is called 'Moment.js'. The human-friendly time should be in it's own tag with the class 'time-since-posted'

//E
//Allow the user to tweet(this is going to require you to understand more about the 'write tweet' function in the data generator.js)

//Advanced:
//1- add bootstrap
//2- allow the user to click on their own username to see their own timeline
//3- allow the user to click on a hashtag to see all the tweets with that hashtag in it.

// Send the URL to our slack channel



//create header
 const $header = $('<header><title>Twiddler!</title></header>'); //create header
  $page.prepend($header); //add header to page

//create new tweets button
const $newTweetsButton = $('<button id="new-tweets-button">Show New Tweets!</button>');
  $page.prepend($newTweetsButton);
  $page.append($tweetsDiv)

  function showTweets(tweetArray){
    $tweetsDiv.html('')//removes old tweets
    tweetArray.forEach((tweet) =>{ //loops through tweet Array
      const $tweet = $('<div class="tweet"></div>');
      const $user = $(`<span class="username">@${tweet.user}</span>`); //creates a user for ech tweet, with the class username @ template
      const createdAt = tweet.created_at; //creates a variable that would represent the time stamp
      const $timeStamp = $(`<span class="timestamp">${createdAt.toString()}</span>`); //creates timestamp 
      const $message = $(`<span class="message">:${tweet.message}</span>`); //creates message itself.

    $tweet.append($user, $message, $timeStamp); //appends the user, the message, and the time stamp to the tweet
    $tweetsDiv.append($tweet); //appends the tweet to the tweetDiv
  });
  }

showTweets(streams.home); //calls the function we just made.

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



 Lets do some thinking here about what we need.

 We need to SEE all of these things:
          A background, a title, and a header showing the title of the site. 
              - these are just sections I can make using JQuery
          a section that displays users the user follows (friends?)
              - this is an array, needs to be clickable to display tweets
          a section that displays all of the tweets that have ocurred that keeps updating
          a place where the user can tweet themselves, with an input form? 

*/