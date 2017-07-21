var builder = require('botbuilder');

module.exports =[
  //search images
  function (session){
    session.send("Welcome I'm BowtyFy your friendly BOT!");
    builder.Prompts.text(session,'Please enter your what image  you want me to display');
  },
  function(session,results,next){
    session.dialogData.img = results.response;
    session.send('Looking for a %s',results.response);
    next();
  },
  //fetching spiders
  function (session){
    var image = session.dialogData.img;
    
    session.send('Searching image of %s');
    
    if(session.message.text.toLowerCase().contains('challenge') | session.message.text.toLowerCase().contains('challenged')){
       session.send('So do you want to challenged the GREAT BOTTYFY');
      session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/challenge-accepted-597051.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('spider') | session.message.text.toLowerCase().contains('spiders')){
        session.send('Here you go the spider you asked!.. Hope you like it');
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/did-you-say-597052.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('relationships') | session.message.text.toLowerCase().contains('relationship')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://missapronlady.files.wordpress.com/2013/09/because-a-stoner-only-needs-food_o_295176.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('ipis') | session.message.text.toLowerCase().contains('cockroach')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQw2tjQHyJxoQfEhzaPRfyxJlyCsO5ZnFdtBDfwA4D-brZqL-D'}]});
      }else if(session.message.text.toLowerCase().contains('rip') | session.message.text.toLowerCase().contains('r.i.p')){
         session.send(`YOU DIED ALONE!!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://i.imgflip.com/915lv.jpg?a416496'}]});
      }else if(session.message.text.toLowerCase().contains('linkedin park') | session.message.text.toLowerCase().contains('chester')){
         session.send(`we've lost another legend ;(!!`);
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://media.makeameme.org/created/rip-in-the.jpg'}]});
      }else if(session.message.text.toLowerCase().contains('noob') | session.message.text.toLowerCase().contains('bobo')){
         session.send({attachments: [{contenttype: 'image/jpg', contenturl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmX2BhGWtH5H0nR5q-_ZiHTgdWasVzqkNMgyOCw0QID16Ep4VtZg'}]});
      }
  
  }
  ];
