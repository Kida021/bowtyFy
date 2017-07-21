// This loads the environment variables from the .env file
require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');
var Promise = require('bluebird');
var request = require('request-promise').defaults({ encoding: null });
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "8a542b90-96c6-42ce-91ba-3aeb28470e62",
    appPassword: "QcDi824W8C1oof6eaAu63J9"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... Thanks for adding me. Just Tell me how can I help your dull and boring LIFE ../.. .", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});
bot.on('typing', function (message) {
  // User is typing
});
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});
//=========================================================
// Bots Dialogs
//=========================================================
String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}
bot.dialog('/', function (session) {
    if(session.message.text.toLowerCase().contains('hello')){
      session.send(`Hello i'm BOWTYFY`);
      }else if(session.message.text.toLowerCase().contains('help')){
        session.send(`How can I help your dull and boring life`);
      }else if(session.message.text.toLowerCase().contains('who are you')){
        session.send(`Who are you?... You're the one who added me in the first place..!! Get lost stranger!!!!  ../..`);
      }else if(session.message.text.toLowerCase().contains('rude')){
        session.send(`I'm not RUDE... I'M BOTTFY and I don't have any emotion nor attitude...`);
      }else if(session.message.text.toLowerCase().contains('tell me something')){
        session.send(`I know one of your secret... ]:)`);
      }else if(session.message.text.toLowerCase().contains('secret')){
        session.send(`You secretly moving your hands up and down in front of the computer... ]:)`);
      } else if(session.message.text.toLowerCase().contains('challenge') | session.message.text.toLowerCase().contains('challenged')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/challenge-accepted-597051.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('spider') | session.message.text.toLowerCase().contains('spiders')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/did-you-say-597052.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('relationships') | session.message.text.toLowerCase().contains('relationship')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://missapronlady.files.wordpress.com/2013/09/because-a-stoner-only-needs-food_o_295176.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('ipis') | session.message.text.toLowerCase().contains('cockroach')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw2tjQHyJxoQfEhzaPRfyxJlyCsO5ZnFdtBDfwA4D-brZqL-D'}]});
      }else if(session.message.text.toLowerCase().contains('momay') | session.message.text.toLowerCase().contains('monay')){
         session.send(`Lumilipad nanaman ang isip ko\n
Na para bang akoy nasa kalangitan\n
Sa tuwing si momay ay aking \n
Matitikman ( sa tuwing si momay ay aking matitikman )`);
      }else if(session.message.text.toLowerCase().contains('ambing') | session.message.text.toLowerCase().contains('kambing')){
         session.send(`Wag kang, samama, kakantutin ka lang nila.\n
Wag kang, maniwala, kakastahin ka lang nila.\n
Wag kang, paumaga, kakantutin lang nila.\n
Wag mong paubaya, kakamkamin ka lang nila.\n
Kakantutin ka lang nila`);
      }else if(session.message.text.toLowerCase().contains('jibanyan') | session.message.text.toLowerCase().contains('jibanya')){
         session.send(`Jibanyan ba... isa syang yokai na aking kaibigan... pero sa POKELAND isa syang mamaw na di mapantayan ng lahat \n
lahat na ata ng players ay sinasamba sya at tinitingala....`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://static3.fjcdn.com/comments/No+this+is+the+god+of+pokemon+_4139a9c4fb5bb55e19ea8717d66ff083.png'}]});
      }else if(session.message.text.toLowerCase().contains('kida') | session.message.text.toLowerCase().contains('heizenberg')){
         session.send(`Si Kida at Heizenberg ba..... isa lng sila sa mga mababang uring nilalang na nag hahangad na \n
mapantayan nila ang lakas at galing ni GOD JIBANYA.... sila ay isang magikarp lng sa harap ni GOD JIBANYA`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://s-media-cache-ak0.pinimg.com/736x/cc/56/40/cc5640b823b798b90c4dc1ebd2866a6f--magikarp-meme-meme-meme.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('sing') | session.message.text.toLowerCase().contains('sings')){
         session.send(`Here's the list of songs that I can sing! \n ambing \n momay..!`);
      }else if(session.message.text.toLowerCase().contains('bhen') | session.message.text.toLowerCase().contains('bhen gate')){
         session.send(`Ahh si Master Bhen Gate bayan...!! Isa din yan sa Mamaw sa POKELAND LEGENDS!! IDOL NYA SI GOD JIBANYA!!!`);
      }else if(session.message.text.toLowerCase().contains('jaymar') | session.message.text.toLowerCase().contains('jay mar')){
         session.send(`Ahh si Master Jaymar bayan...!! Isa din yan sa Mamaw sa POKELAND LEGENDS Ka server sya ni MASTER BHEN GATE!! IDOL NYA SI GOD JIBANYA!!!`);
      }else if(session.message.text.toLowerCase().contains('laro') | session.message.text.toLowerCase().contains('game')){
         session.send(`What game do you want to play..`);
         session.send(`How about a game of rock,paper and scissor(bato,bato,pick)?`);
         session.send(`If you beat me i'll give you something special!! if you know what i mean!! ]:)`);
         
      }else if(session.message.text.toLowerCase().contains('play rock') | session.message.text.toLowerCase().contains('play bato')){
            session.send(`Paper`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://en.academic.ru/pictures/enwiki/82/Rock-paper-scissors_%28paper%29.png'}]});
      }else if(session.message.text.toLowerCase().contains('play paper') | session.message.text.toLowerCase().contains('play papel')){
            session.send(`Scissor`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_%28scissors%29.png'}]});
      }else if(session.message.text.toLowerCase().contains('play Scissor') | session.message.text.toLowerCase().contains('play gunting')){
            session.send(`Rock`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://4.bp.blogspot.com/-ryiITHJoTn8/TsqpAEss4BI/AAAAAAAAAy8/Z9P8VBMzqqo/s1600/Rock-paper-scissors_%2528rock%2529.png'}]});
      }else if(session.message.text.toLowerCase().contains('cheater') | session.message.text.toLowerCase().contains('mandurugas')){
            session.send(`]:)`);
            session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://images.nationalgeographic.com/wpf/media-live/photos/000/004/cache/cheetah-jump_493_990x742.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('dead') | session.message.text.toLowerCase().contains('died')){
         session.send(`You JUST DIED`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'http://i3.kym-cdn.com/photos/images/original/001/114/978/5d2.png'}]});
      }else if(session.message.text.toLowerCase().contains('rip') | session.message.text.toLowerCase().contains('r.i.p')){
         session.send(`YOU DIED ALONE!!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.imgflip.com/915lv.jpg?a416496'}]});
      }else if(session.message.text.toLowerCase().contains('linkedin park') | session.message.text.toLowerCase().contains('chester')){
         session.send(`we've lost another legend ;(!!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/rip-in-the.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('noob') | session.message.text.toLowerCase().contains('bobo')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX2BhGWtH5H0nR5q-_ZiHTgdWasVzqkNMgyOCw0QID16Ep4VtZg'}]});
      }else if(session.message.text.toLowerCase().contains('hep hep') | session.message.text.toLowerCase().contains('hip hip')){
         session.send(`Hooray!!`);
      }else if(session.message.text.toLowerCase().contains('hooray') | session.message.text.toLowerCase().contains('huray')){
         session.send(`Hep Hep!!`);
      }else{
        session.send(`Sorry I don't understand alien language please learn how to speak in english!! and talk to me again.....\n
But you can try these commands \n
who are you, tell me i'm rude, make me sing..`);
      }
   var msg = session.message;
    if (msg.attachments.length) {

        // Message with attachment, proceed to download it.
        // Skype & MS Teams attachment URLs are secured by a JwtToken, so we need to pass the token from our bot.
        var attachment = msg.attachments[0];
        var fileDownload = checkRequiresToken(msg)
            ? requestWithToken(attachment.contentUrl)
            : request(attachment.contentUrl);

        fileDownload.then(
            function (response) {

                // Send reply with attachment type & size
                var reply = new builder.Message(session)
                    .text('Attachment of %s type and size of %s bytes received.', attachment.contentType, response.length);
                session.send(reply);

            }).catch(function (err) {
                console.log('Error downloading attachment:', { statusCode: err.statusCode, message: err.response.statusMessage });
            });

    } else {

        // No attachments were sent
        var reply = new builder.Message(session)
            .text('Hi there! This sample is intented to show how can I receive attachments but no attachment was sent to me. Please try again sending a new message with an attachment.');
        session.send(reply);
    }

});

// Request file with Authentication Header
var requestWithToken = function (url) {
    return obtainToken().then(function (token) {
        return request({
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/octet-stream'
            }
        });
    });
};

// Promise for obtaining JWT Token (requested once)
var obtainToken = Promise.promisify(connector.getAccessToken.bind(connector));

var checkRequiresToken = function (message) {
    return message.source === 'skype' || message.source === 'msteams';
};
});
