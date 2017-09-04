var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

//Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
    var screenName = eventMsg.source.screen_name;
    tweetIt('Hi ' + '@' + screenName + ', thanks for following us - you can also checkout our website www.andrewstax.ie');
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
     console.log(data);
}

}