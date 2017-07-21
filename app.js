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
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, [
    function (session) {
         session.send("Hi I'm Bowtyfy your personal bot companion... pls rate your boredom from the scale of 0-infinity?");
        builder.Prompts.choice(session, 'What card would like to me to do?', CardNames, {
            maxRetries: 3,
            retryPrompt: 'Ooops, what you wrote is not a valid option, please try again'
        });
    },
    function (session, results) {

        // create the card based on selection
        var selectedCardName = results.response.entity;
        var card = createCard(selectedCardName, session);

        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);
    }
]);

var HeroCardName = 'Linkin park';
var ThumbnailCardName = 'Game';
var ReceiptCardName = 'Receipt card';
var SigninCardName = 'Sign-in card';
var AnimationCardName = "Animation card";
var VideoCardName = "Video card";
var AudioCardName = "Audio card";
var CardNames = [HeroCardName, ThumbnailCardName, ReceiptCardName, SigninCardName, AnimationCardName, VideoCardName, AudioCardName];

function createCard(selectedCardName, session) {
    switch (selectedCardName) {
        case HeroCardName:
            return createHeroCard(session);
        case ThumbnailCardName:
            return createThumbnailCard(session);
        case ReceiptCardName:
            return createReceiptCard(session);
        case SigninCardName:
            return createSigninCard(session);
        case AnimationCardName:
            return createAnimationCard(session);
        case VideoCardName:
            return createVideoCard(session);
        case AudioCardName:
            return createAudioCard(session);
        default:
            return createHeroCard(session);
    }
}

function createHeroCard(session) {
    return new builder.HeroCard(session)
                .title('Likin Park <3')
        .subtitle('In the End')
        .text('.....')
        .images([
            builder.CardImage.create(session, 'https://media.makeameme.org/created/rip-in-the.jpg')
        ]);
}

function createThumbnailCard(session) {
if(session.message.text.toLowerCase().contains('laro') | session.message.text.toLowerCase().contains('game')){
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
      }
}

var order = 1234;
function createReceiptCard(session) {
    return new builder.ReceiptCard(session)
        .title('John Doe')
        .facts([
            builder.Fact.create(session, order++, 'Order Number'),
            builder.Fact.create(session, 'VISA 5555-****', 'Payment Method')
        ])
        .items([
            builder.ReceiptItem.create(session, '$ 38.45', 'Data Transfer')
                .quantity(368)
                .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png')),
            builder.ReceiptItem.create(session, '$ 45.00', 'App Service')
                .quantity(720)
                .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png'))
        ])
        .tax('$ 7.50')
        .total('$ 90.95')
        .buttons([
            builder.CardAction.openUrl(session, 'https://azure.microsoft.com/en-us/pricing/', 'More Information')
                .image('https://raw.githubusercontent.com/amido/azure-vector-icons/master/renders/microsoft-azure.png')
        ]);
}

function createSigninCard(session) {
    return new builder.SigninCard(session)
        .text('BotFramework Sign-in Card')
        .button('Sign-in', 'https://login.microsoftonline.com');
}

function createAnimationCard(session) {
    return new builder.AnimationCard(session)
        .title('Microsoft Bot Framework')
        .subtitle('Animation Card')
        .image(builder.CardImage.create(session, 'https://docs.microsoft.com/en-us/bot-framework/media/how-it-works/architecture-resize.png'))
        .media([
            { url: 'http://i.giphy.com/Ki55RUbOV5njy.gif' }
        ]);
}

function createVideoCard(session) {
    return new builder.VideoCard(session)
        .title('Big Buck Bunny')
        .subtitle('by the Blender Institute')
        .text('Big Buck Bunny (code-named Peach) is a short computer-animated comedy film by the Blender Institute, part of the Blender Foundation. Like the foundation\'s previous film Elephants Dream, the film was made using Blender, a free software application for animation made by the same foundation. It was released as an open-source film under Creative Commons License Attribution 3.0.')
        .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/220px-Big_buck_bunny_poster_big.jpg'))
        .media([
            { url: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://peach.blender.org/', 'Learn More')
        ]);
}

function createAudioCard(session) {
    return new builder.AudioCard(session)
        .title('I am your father')
        .subtitle('Star Wars: Episode V - The Empire Strikes Back')
        .text('The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film\'s story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.')
        .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'))
        .media([
            { url: 'http://www.wavlist.com/movies/004/father.wav' }
        ])
        .buttons([
            builder.CardAction.openUrl(session, 'https://en.wikipedia.org/wiki/The_Empire_Strikes_Back', 'Read More')
        ]);
}
