require('dotenv-extended').load();

var builder = require('botbuilder');
var restify = require('restify');
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});

//creating chat bot

var connector = new builder.ChatConnector({
    appId: "8a542b90-96c6-42ce-91ba-3aeb28470e62",
    appPassword: "QcDi824W8C1oof6eaAu63J9"
});
server.post('/api/messages', connector.listen());
//dialogLabels
var DialogLabels = {
    Images: 'images',
    Noob: 'noob',
    Sing: 'sing',
    Support: 'support'
};
var bot = new builder.UniversalBot(connector, [
    function (session) {
        // prompt for search option
        builder.Prompts.choice(
            session,
            'Heres my existing commands: images , noob, and sing!',
            [DialogLabels.Images, DialogLabels.Noob, DialogLabels.Sing],
            {
                maxRetries: 3,
                retryPrompt: 'Not a valid option'
            });
    },
   function (session, result) {
        if (!result.response) {
            // exhausted attemps and no selection, start over
            session.send('Ooops! Too many attemps :( But don\'t worry, I\'m handling that exception and you can try again!');
            return session.endDialog();
        }
      // on error, start over
        session.on('error', function (err) {
            session.send('Failed with message: %s', err.message);
            session.endDialog();
        });
       // continue on proper dialog
        var selection = result.response.entity;
        switch (selection) {
            case DialogLabels.Images:
                return session.beginDialog('images');
            case DialogLabels.Noob:
                return session.beginDialog('noob');
              case DialogLabels.Sing:
                return session.beginDialog('sing');
        }
    }
]);
bot.dialog('images', require('./images'));
bot.dialog('noob', require('./noob'));
bot.dialog('sing', require('./sing'));
bot.dialog('sing', require('./support'))
    .triggerAction({
        matches: [/help/i, /support/i, /problem/i]
    });

// log any bot errors into the console
bot.on('error', function (e) {
    console.log('And error ocurred', e);
});
