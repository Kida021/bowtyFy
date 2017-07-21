// This loads the environment variables from the .env file
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
// This is a dinner reservation bot that uses multiple dialogs to prompt users for input.
// This is a reservation bot that has a menu of offerings.
// Create your bot with a function to receive messages from the user
var bot = new builder.UniversalBot(connector, function (session) {
    var msg = session.message;
    if (msg.attachments && msg.attachments.length > 0) {
     // Echo back attachment
     var attachment = msg.attachments[0];
        session.send({
            text: "You sent:",
            attachments: [
                {
                    contentType: attachment.contentType,
                    contentUrl: attachment.contentUrl,
                    name: attachment.name
                }
            ]
        });
    } 
});
server.post('/api/messages', connector.listen());
