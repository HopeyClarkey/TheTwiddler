$(() => {
  const $page = $('#all-contents');
  // this variable represents a jQ OBJECT that contains the main content div with the ID all-Contents.
  // This div will be used to hold all the content of the page.



  //create header
   const $header = $('<header></header>').css({ // okay so this creates a header for my page
    padding: '10px', // it's got a padding of 10px inside the header div
    textAlign: 'center', //all the text in here is going to align to center
    fontSize: '60px', //fontsize is specified,
    fontWeight: 'bold', //can bold here
    height: '100px', //how tall is my header?
    backgroundColor: 'lavender', //this is the background color
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lightpink', //adding barbie vibes
    marginBottom: '10px', //this gives us space between other obejcts and the header
    marginRight: '270px', //my sidebar is 50 pixles, so this gives me a little room here.

  });
  $header.text('Twiddler!'); //fill header with words
  $page.prepend($header); //add header to the TOP of the page with Prepend


//Write New Tweets button comes next, just creating the section for it:

  const $writeNewTweet =$('<section id = "write-new-tweet"></section>').css({ //creates write new tweet section
    padding: '10px',  //more padding
    marginTop: '10px', //more space
    backgroundColor: 'powderblue', //malibu blue
    borderRadius: '8px', //round corners
    border: ' 2px solid lavender', //tie together
    height: '100px',
    width: 'calc(100% - 270px)', //fullwidth minus sidebar plus margin of 60?
    boxSizing: 'border-box', //okay I learned this when I was having trouble with the sidebar covering up the edges
    display: 'flex', //this creates a dynamic display of the div that will resize!
    alignItems: 'stretch' //I want the text input boxes to show up on the right of this main box
  })

//create input text box
  const $tweetText = $('<input type = "text" placeholder="Give us the Twiddle!" maxlength="280"/>').css({ //input text for tweets
    flex: '1', //this means it will resize with the $writeNewText div
    padding: '10px', //padding
    fontSize: '22px', //size
    backgroundColor: 'lavender', //this is the background color
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lightpink', //adding barbie vibes
    cursor: 'text' //this changes it to the text input!
  });

  //create input button
  const $tweetSubmit = $('<button type= "submit">Tweet</button>').css({
    padding: '10px', //padding
    fontSize: '22px', //size
    backgroundColor: 'lightpink', //this is the background color
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lavender', //adding barbie vibes
    cursor: 'pointer' // this changes it to a pointer
  });
  $writeNewTweet.append($tweetText, $tweetSubmit) //just put the tweet text input box and the button to submit
  // the tweet in the $writeNewTweet div

    $tweetSubmit.on('click', () => { //on the click of tweet submit
      let messageText = $tweetText.val().trim(); //takes the value of the text in the text box and trims any extra space around the message.
        if (messageText === "") return; // if there is no message, do nothing.
      let newTweet ={ //if there is a message, create newTweet, with user, messageText, and current date
        user: 'Me' //does this stay???
        message: messageText
        created_at: new Date();
      }
        let $newTweet = $('<div class = "tweet"></div>'); //create division for new tweet
        let $myUser = $(`<span class = "username"> @{myTweet.user}</span>`); //create user COME BACK TO THIS
        let $myMessage = $(`<span class ="message">: ${newTweet.message}</span>`); //this is the message from the input box
        let $myTimeStamp = $(`<span class = "timestamp"> ${myTweet.created_at.toString()}</span>`);// this is the time stamp ??? moment

        $newTweet.append($myUser, $myMessage, $myTimeStamp) //put myUser and myMessage, myTimeStamp onto newTweet
        $tweetsList.prepend($newTweet); //put newtweet to top of tweet list
        $tweetText.val(''); //clear the tweetbox value
    })
//code to new tweet will come here? Or below $tweetsDiv as that's where it inserts it?
   /* okay so what happens here- on tweet submit click, the text in the input box needs
  to go into the tweetlist, in the same formatting. pulling the info from the show new tweets button. Will
  need to make a new function that pulls everything in exactly the same format. Which means when I update
  the moment so that it displays correctly I will need to update it here too.*/
 /* $tweetSubmit.on('click', () => { //on the click,
      const $myTweet = $('<div class="tweet"></div>'); //create $MyTweet
      const $myUser = $(`<span class="username">@${'me'}</span>`); //creates a user for ech tweet, with the class username @ template
      const myCreatedAt = $myTweet.created_at; //creates a variable that would represent the time stamp
      const myMomentTimeAgo = moment(myCreatedAt).fromNow(); //fighting with moment will come back to this after solve
      const $myTimeStamp = $(`<span class="timestamp">${myCreatedAt.toString()}</span>`); //creates timestamp
      const $myHumanFriendlyTimeStamp = $(`<span class="humanFriendlyTimeStamp">${myMomentTimeAgo}</span>`); //creates humanfriendly time stamp
      const $myMessage = $(`<span class="message">:${$myTweet.$myMessage}</span>`); //creates message itself.
    $myTweet.append($myUser, $myMessage, $myTimeStamp, $myHumanFriendlyTimeStamp)
    $tweetsList.prepend($myTweet);
  }
);*/


  const $tweetsDiv = $('<div id ="tweets" class="tweets"></div>').css({ //gotta create a box for the newTweets, match the others
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    border: ' 2px solid powderblue',
    width: '75%',
    backgroundColor: 'lightpink'
  });

  const $tweetsList =$('<div class = "tweet-list"></div>').css({  //I ran into trouble deleting the entire tweetDiv instead of 
  // just the tweets when I needed new ones. Added this so I can just go ahead and delete the tweets and not the object itself.
    paddingTop: '20px' //I liked the way this looked best
  });
  $tweetsDiv.append($tweetsList); //all right, popping that list into the tweets div

  const $sideBar = $('<div id ="sidebar" class ="sidebar"></div>').css({ //okay I wanted a sidebar where I can show the
  // friends and the hashtags eventually? recent tweets, etc.
    position: 'fixed', //I want this sidebar to stay on the right
    marginLeft: '10px',
    padding: '10px',
    right: '0',
    top: '0',
    height: '100vh',  //this is viewheight, so the entire screen
    width: '250px', //define size
    border: ' 2px solid lavender', // tie my design
    overflowY: 'auto', //this means it will overlay things- can cause issues but I wanted it to stay where it is no matter
    // what else is on the page.
    backgroundColor: 'powderblue'
  });


  const $friendsOfDiv = $('<div class="friends"></div>').css({ //this is my friends div where my friends will eventually show up.
    padding: '10px',
    width: '250px)', //fullwidth minus sidebar plus margin of 60?
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    backgroundColor: 'lavender'
  });
  $sideBar.append($friendsOfDiv); //put that in the sidebar!

  // how can I do this here? I need to call the global var 'users' and have them have a clickable username that will update another section-
  //instead of the hashtags, I can do that in that space?
  // I think I'd like to have the small 'friends bit' at the top, maybe page another page with hashtags, and then another part underneath
  //that pages through based on what you are selecting at the time? Maybe default to it's own user's tweets?

  const $hashTags = $('<div class="friends"></div>').css({ //this is below the friends div
    padding: '10px',
    width: '250px)', //fullwidth minus sidebar plus margin of 60?
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    backgroundColor: 'lavender'
  });
  $sideBar.append($hashTags); //put that in the sidebar!


  const $contentContainer = $('<div id = "content-container"></div>').css({ // this overall holds my sidebar on one side, and my tweets div and sidebar, inside the page
    display: 'flex', //insures that the content moves and resizes when the rest of the elements do.
  });

  $contentContainer.append($tweetsDiv, $sideBar);
  $page.append($writeNewTweet);
  $page.append($contentContainer)

  // this variable represents a JQ object that contains a div with the class tweets. This div will be used to hold
  //all of the tweet elements.
//I want to make this look different, I thinK I can do that by just adding the css to the actual creation

//BARE MINIMUM REQUIREMENTS:

//A
//Show the new user tweets somehow. You can show them automatically as they are created every 10 seconds, or create a button
//that displays new tweets: The button should have an id of new-tweets-button. New Tweets should be added to the top of the
//list of tweets.
// All tweets in the streams.home array should be displayed. There is a container div that has the class tweets
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





//create new tweets button
const $newTweetsButton = $('<button id="new-tweets-button">Show New Tweets!</button>').css({ 
  //okay so this creates the $jQ that creates the new button
  position: 'absolute', //this means it wont move around the page
  top: '10px', //just a little room around it.
  backgroundColor: 'powderblue', //malibu blue
  borderRadius: '8px', //round corners
  border: ' 2px solid lavender', //tie together
  right: '5px',
  zIndex: 10
});
$tweetsDiv.css({position: 'relative'});
$tweetsDiv.prepend($newTweetsButton);



  function showTweets(tweetArray){
    $tweetsList.html('')//removes old tweets
    tweetArray.forEach((tweet) =>{ //loops through tweet Array
      const $tweet = $('<div class="tweet"></div>');
      const $user = $(`<span class="username">@${tweet.user}</span>`); //creates a user for ech tweet, with the class username @ template
      const createdAt = tweet.created_at; //creates a variable that would represent the time stamp COME BACK with moment???
      const momentTimeAgo = moment(createdAt).fromNow(); //fighting with moment
      const $timeStamp = $(`<span class="timestamp">${createdAt.toString()}</span>`); //creates timestamp
      const $humanFriendlyTimeStamp = $(`<span class="humanFriendlyTimeStamp">${momentTimeAgo}</span>`);
      const $message = $(`<span class="message">:${tweet.message}</span>`); //creates message itself.

    $tweet.append($user, $message, $timeStamp, $humanFriendlyTimeStamp); //appends the user, the message, and the time stamp to the tweet
    $tweetsList.prepend($tweet); //appends the tweet to the tweetDiv

  });
  }

showTweets(streams.home); //calls the function we just made.



//hook up the button to the function we just made:
$newTweetsButton.on('click', ()=>{ //on the click, 
  showTweets(streams.home); //refresh the tweets
})

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

  $tweetsDiv.prepend($tweets);
  }

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