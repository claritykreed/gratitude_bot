var Twit = require('twit');
var config = require('./config');
var T = Twit(config);

//Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
    var screenName = eventMsg.source.screen_name;
    console.log("Just followed by " + screenName);
    tweetIt('@' + screenName + '- Thank you for following us on Twitter! Check out our blog www.andrewstax.ie/blog & DM with any questions');
    }

function tweetIt(txt) {
    
    var tweet = {
        status: txt
    };

    console.log(txt);
    
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if (err) { 
            console.log("Reply successful" + "\n" + "...............................");
            } else {
            console.log("msg sent ok");
            }
    }
}
