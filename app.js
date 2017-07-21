// This loads the environment variables from the .env file
require('dotenv-extended').load();
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
var DialogLabels = {
   Images: 'Images',
   Noob : 'Noob'
};
var bot = new builder.UniversalBot(connector,[
      function (session){
      builder.Prompts.choice(
         session,
         'What do you want me to do?',
         [DialogLabels.Images,DialogLabels.Noob]
         {
            maxRetries: 3,
            retryPrompt: 'Not a Valid Option'
         });
   },
   function (session,result){
      if(!result.response){
         session.send('Ooops! Too many attemps ;( try again');
         return session.endDialog();
      }
      session.on('error', function(err){
                  session.send('Failed with message: %s',err.message);
         session.endDialog();
     });
         
         var selection = result.response.entity;
         switch (selection){
            case DialogLabels.Images:
               return session.beginDialog('Images');
            case DialogLabels.Noob:
               return session.beginDialog('Noob');
                          }
   }

]);
server.post('/api/messages', connector.listen());
bot.dialog('Images',
           function(session){
               session.sends('What Image do you want me do return');
            });
bot.dialog('Noob',
          function (session){
               session.sends('What Can i do to you NOOB!');
         });
      
      
      
      
      
      
      
      
      
      
/*Bot on
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
}*/
