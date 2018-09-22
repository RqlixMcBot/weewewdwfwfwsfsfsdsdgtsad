const Discord = require('discord.js');
const client = new Discord.Client();





client.login('NDg5MzIxMDQzODM2Nzk2OTI4.DnpDYg.5PnGZ1mdS-RxRK-sm08shOF5FEA');








client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('by iTz_Volcano');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {

        console.log(`----------------`);
              console.log(`iTz_Volcano`);
      console.log(`Your Bot in  ${client.guilds.size} Servers `);
    console.log(`----------------`);
  client.user.setGame(` *help | *inv `,"https://twitch.tv/")


});
