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
        session.send(`How can I help you're dull and boring life`);
      }else if(session.message.text.toLowerCase().contains('who are you')){
        session.send(`Who are you?... You're the who added me in the first place..!! Get lost stranger!!!!  ../..`);
      }else if(session.message.text.toLowerCase().contains('rude')){
        session.send(`I'm not RUDE... I'M BOTTFY and I don't have any emotion nor attitude...`);
      }else if(session.message.text.toLowerCase().contains('tell me something')){
        session.send(`I know one of your secret... ]:)`);
      }else{
        session.send(`Sorry I don't understand alien language please learn how to speak in english!! and talk to me again.....`);
      }
});
