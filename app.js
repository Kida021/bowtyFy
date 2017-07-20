var restify = require('restify');
var builder = require('botbuilder');
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
      }else{
        session.send(`Sorry I don't understand alien language please learn how to speak in english!! and talk to me again.....`);
      }
});
