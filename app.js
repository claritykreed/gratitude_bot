// require('dotenv').config();
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
    var screenName = eventMsg.source.screen_name;
    tweetIt('@' + screenName + ', Welcome and thank you for following us on Twitter! We hope you like our tweets and look forward to sharing interests. Regards from all of us at Andrews Tax Consulting in Dublin.');
    }

function tweetIt(txt) {
    
    var tweet = {
        status: txt
    };

    T.post('statuses/update', tweet, tweeted);

    function tweeted(err, data, response) {
      if (err) {
          console.log("Something went wrong");
      }
     console.log("It worked");
}

}