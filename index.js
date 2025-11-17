$(() => {
  const $page = $('#all-contents');// this variable represents a jQ OBJECT that contains the main content
// div with the ID all-Contents. This div will be used to hold all the content of the page.

//SECTION ONE:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//HEADER AND TWEETS TIMELINE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   const $header = $('<header></header>').css({ // okay so this creates a header for my page
    flex: '1',
    padding: '10px', // it's got a padding of 10px inside the header div
    textAlign: 'center', //all the text in here is going to align to center
    fontSize: '60px', //fontsize is specified,
    fontWeight: 'bold',
    color: 'teal',
    height: '75px', //how tall is my header?
    backgroundColor: 'lavender', //this is the background color
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lightpink', //adding barbie vibes
    marginBottom: '10px', //this gives us space between other obejcts and the header
    marginRight: '270px', });//my sidebar is 50 pixles, so this gives me a little room here.

$header.text('The Twiddler!'); //fill header with words
$page.prepend($header); //add header to the TOP of the page with Prepend

//TWEETS TIMELINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const $tweetsDiv = $('<div id ="tweets" class="tweets"></div>').css({ //gotta create a box for the newTweets, match the others
    padding: '10px', //padding
    marginTop: '10px', //space from the tweet button
    borderRadius: '8px', //rounded corners
    border: ' 2px solid powderblue', //border color
    backgroundColor: 'lightpink', //color
    color: 'white', //color
    width: 'calc(100% - 270px)', // width
    boxSizing: 'border-box',
    display: 'flex', // this will have div resize with window movement.
    alignItems: 'stretch' }); //this will have items resize inside

  const $tweetsList =$('<div class = "tweet-list"></div>').css({  //I ran into trouble deleting the entire tweetDiv instead of
  // just the tweets when I needed new ones. Added this so I can just go ahead and delete the tweets and not the object itself.
    paddingTop: '30px', //I liked the way this looked best
    fontSize: '22px' });

$tweetsDiv.append($tweetsList); //all right, popping that list into the tweets div


//WRITE NEW TWEETS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
    alignItems: 'stretch' });//I want the text input boxes to move with the box.

//create input text box
  const $tweetText = $('<input id="message-input" type="text" placeholder="Give us the Twiddle!" maxlength="280"/>').css({ //input text for tweets
    flex: '1', //this means it will resize with the $writeNewText div
    padding: '10px', //padding
    fontSize: '22px', //size\
    margin: '5px',
    height: '50px',
    backgroundColor: 'lavender', //this is the background color
    color: 'teal',
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lightpink', //adding barbie vibes
    cursor: 'text'}); //this changes it to the text input!

  //create input button
  const $tweetSubmit = $('<input type= "submit" value = "Tweet">').css({
    flex: '.1', //this means it will resize with the $writeNewText div
    padding: '10px', //padding
    fontSize: '22px', //size
    margin: '5px',
    height: '73px',
    backgroundColor: 'lightpink', //this is the background color
    borderRadius: '8px', //this rounds my corners!
    border: ' 2px solid lavender', //adding barbie vibes
    cursor: 'pointer' });// this changes it to a pointer

//this function adds the tweet to the home array to pass the tests
  function addTweetToHome(user, message){ //takes in a user and message
      const newTweet = { //creates new tweet object
        user,
        message,
        created_at: new Date() // timestamps it
      };
      streams.home.push(newTweet); //pushes to the home array
      return newTweet;
    }

$writeNewTweet.append($tweetText, $tweetSubmit) //just put the tweet text input box and the button to submit
  // the tweet in the $writeNewTweet div

$tweetSubmit.on('click', () => { //on the click of tweet submit

//Text stuff
        let messageText = $tweetText.val().trim(); //takes the value of the text in the text box and trims any extra space around the message.
          if (messageText === "") return;// if there is no message, do nothing.

// Log in stuff
        if (!window.visitor) { //if the window visitor is null or undefined
          const inputName = $('#username-input').val().trim(); //check for value from input name
          if (!inputName) { // if input name is nullish
            alert('You need to log in!'); //alert you need to log in
            return;
          } // if there is no user logged in, do nothing.
        window.visitor = inputName; //set to input name
        } let newTweet = addTweetToHome(window.visitor, messageText); // calls the home push from the object & creates the object

//create tweet itself to show on page:
        const $tweet = $('<div class="tweet"></div>');
        const $user = $(`<span class="username">@${newTweet.user}</span>`);
        const $message = $(`<span class="message">${newTweet.message}</span>`);

        const createdAt = newTweet.created_at instanceof Date ? new Date(newTweet.created_at) : new Date();
        const $timeStamp = $(`<span class="timestamp">${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>`);
        const $humanFriendlyTimeStamp = $(`<span class="humanFriendlyTimestamp">${moment(createdAt).fromNow()}</span>`);

$tweet.append($user, $message, $timeStamp, $humanFriendlyTimeStamp);
$tweetsList.prepend($tweet); //put newtweet to top of tweet list
$tweetText.val(''); //clear the tweetbox value
  });



//SECTION TWO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//SIDEBAR STUFF~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//MAIN SECTION
  const $sideBar = $('<div id ="sidebar" class ="sidebar"></div>').css({ //okay I wanted a sidebar where I can show things, log in, etc
    position: 'fixed', //I want this sidebar to stay on the right
    marginLeft: '10px', 
    padding: '10px',
    right: '0', //sticks all the way to the left
    top: '0', //sticks allthe way to the top
    height: '100vh',  //this is viewheight, so the entire screen
    width: '250px', //define size
    border: ' 2px solid lavender', // tie my design
    overflowY: 'auto', //this means it will overlay things- can cause issues but I wanted it to stay where it is no matter
    // what else is on the page.
    backgroundColor: 'powderblue'});

//Log In Information:
  const $logIn = $('<div class="friends"></div>').css({
    padding: '5px',
    width: '250px)', //fullwidth minus sidebar plus margin of 60?
    height: '150',
    border: ' 2px solid lightpink',
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    backgroundColor: 'lavender'});

//text for the username
  const $logInUser =  $('<input id="username-input" type="text" placeholder="Enter Username">').css({
    top: '10px', //just a little room around it.
    height: '50px',
    marginTop: '5px',
    fontSize: '22px',
    textAlign: 'center',
    backgroundColor: 'lightpink', //malibu blue
    borderRadius: '8px', //round corners
    border: ' 2px solid powderblue',
    width: '200px', //define size
    zIndex: 10,
    cursor: 'text'});

//log in and clear buttons
  const $logInButton = $('<button>Log In</button>').css({
    top: '10px', //just a little room around it.
    backgroundColor: 'lightpink', //malibu blue
    borderRadius: '8px', //round corners
    border: ' 2px solid lavender', //tie together
    right: '5px', //tie together
    width: '70',
    border: ' 2px solid powderblue',
    marginRight: '15px',
    marginTop: '2.5px',
    marginLeft: '15px',
    zIndex: 10,
    cursor: 'pointer'});

  const $clearName = $('<button>Clear</button>').css({
    top: '10px', //just a little room around it.
    backgroundColor: 'lightpink', //malibu blue
    borderRadius: '8px', //round corners
    border: ' 2px solid powderblue',
    right: '5px',
    width: '70',
    marginTop: '2.5px',
    marginRight: '15px',
    marginLeft: '15px',
    zIndex: 10,
    cursor: 'pointer'});

//shows who is logged in
  const $currentName = $('<div class="current-name"></div>').css({
    padding: '5px',
    width: '250px)',
    height: '50',
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    color: 'teal',
    alignItems: 'fill',});

$logIn.append($logInUser, $logInButton, $clearName); //add the username, and the two buttons
$logIn.append($currentName); //put the current name here C

//button stuff to make this all work:
  window.visitor = null; //<<this is the default when someone visits

$logInButton.on('click', () =>{ // on the log in button click
    const name = $logInUser.val().trim(); //going to be using these a lot, the value of the box, with any extra outside spaces removed
    if (!name) { //if there is no name
      alert("Username required!"); //tell the visitor to add one
      return; //come back without anything
    } //if there is
    window.visitor = name; //this is the reset of the window visitor to the name!
      alert(`Logged in as @${window.visitor}`);
  $currentName.text(`Logged in as: ${window.visitor}`); //updates the log in title with name!
  });

$clearName.on('click', () =>{ //on the clear button click
    window.visitor =null; //clear the window visitor
    $logInUser.val(''); //this is so freaking useful clear the value
    $currentName.text('Not Logged In'); //update to not logged in.
  });

//COME BACK TO THIS
  const $friendsOfDiv = $('<div class="friends"></div>').css({ //this is my friends div where my friends will eventually show up.
    padding: '10px',
    width: '250px)', //fullwidth minus sidebar plus margin of 60?
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    backgroundColor: 'lavender'
  });

  // I think I'd like to have the small 'friends bit' at the top, maybe page another page with hashtags, and then another part underneath
  //that pages through based on what you are selecting at the time? Maybe default to it's own user's tweets?

  const $otherSection = $('<div class="friends"></div>').css({ //this is below the friends div
    padding: '10px',
    width: '250px)', //fullwidth minus sidebar plus margin of 60?
    boxSizing: 'border-box',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '15px',
    backgroundColor: 'lavender'
  });
$sideBar.append($logIn,$friendsOfDiv,$otherSection); //put all of these sections in the sidebar!
  const $contentContainer = $('<div id = "content-container"></div>').css({ // this overall holds my sidebar on one side, and my tweets div and sidebar
    display: 'flex', //insures that the content moves and resizes when the rest of the elements do.
  });

$contentContainer.append($tweetsDiv, $sideBar);
$page.append($writeNewTweet);
$page.append($contentContainer)

//C
// allow the user to click on any username to see that users timeline. The user should be able to get back to the home timeline
//somehow. The username should be in it's own tag with the class 'username'

//Advanced:
//1- add bootstrap
//2- allow the user to click on their own username to see their own timeline
//3- allow the user to click on a hashtag to see all the tweets with that hashtag in it.

//SECTION THREE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// MORE FUNCTIONALITY IN TWEETS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//create new tweets button
  const $newTweetsButton = $('<button id="new-tweets-button">Show New Tweets!</button>').css({
  //okay so this creates the $jQ that creates the new button
    position: 'absolute', //this means it wont move around the page
    top: '10px', //just a little room around it.
    backgroundColor: 'powderblue', //malibu blue
    borderRadius: '8px', //round corners
    border: ' 2px solid lavender', //tie together
    right: '5px',
    marginRight: '15px',
    marginLeft: '15px',
    zIndex: 10
  });
$tweetsDiv.css({position: 'relative'});
$tweetsDiv.prepend($newTweetsButton);
  function showTweets(tweetArray){
$tweetsList.html('')//removes old tweets
    tweetArray.forEach((tweet) =>{ //loops through tweet Array
      if (!tweet || !tweet.user) return; // if the tweet is undefined, return with nothing.
//create tweet:
      const $tweet = $('<div class="tweet"></div>'); //creates a div for each tweet
      const $user = $(`<span class="username">@${tweet.user}</span>`); //creates a user for ech tweet, with the class username @ template
      const $message = $(`<span class="message">${tweet.message}</span>`); //creates message itself.
//fix timestamp formatting:
      let createdAt = tweet.created_at instanceof Date ? new Date(tweet.created_at): new Date(); //creates variable for date
      const momentTimeAgo = moment(createdAt).fromNow() ; //converts with moment how long ago
      const momentTime = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a'); //converts with moment actual time
      const $timeStamp = $(`<span class="timestamp"> ${momentTime}</span>`); //creates timestamp
      const $humanFriendlyTimeStamp = $(`<span class="humanFriendlyTimestamp"> ${momentTimeAgo}</span>`);
$tweet.append($user, $message, $timeStamp, $humanFriendlyTimeStamp); //appends the user, the message, and the time stamp to the tweet
$tweetsList.prepend($tweet); });//appends the tweet to the tweetDiv
  };

// going to change the tweetslist based on what user we are looking at!
  let filteredUser = null;

$tweetsList.on('click', '.username', function() { //when we click the username
  const username =$(this).text().substring(1);
  filteredUser = username; //make the username a filtered user variable
  if (streams.users[username]) { // if there is a username in the streams array that matches,
    showTweets(streams.users[username]);} // show the tweets that belong to that user
  $newTweetsButton.text('Get Back Home'); //flip the button so that you can get back home.
});

showTweets(streams.home); //calls the function we just made.

$newTweetsButton.on('click', ()=>{ //on the click,
  if (filteredUser) { //if this is currently nullish,
    filteredUser = null; //reset to null
    showTweets(streams.home); //show
    $newTweetsButton.text('Show New Tweets!');
  } else {showTweets(streams.home); }
});

$tweetsList.on('mouseenter', '.username', function(){
  $(this).css('cursor', 'pointer');
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