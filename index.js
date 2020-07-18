const Discord = require("discord.js"); //Exporting Package | If You Ever Get Error [MODULE_NOT_FOUND] Than You Need To Install A Package!
const client = new Discord.Client(); //Creating A Client/Bot From Discord.js Package To Do Stuff!
const { Prefix, Token, Owner } = require("./config.js"); //Exporting File Things File Name Config.js And Getting Things Like : Prefix Token And Owner ID!

//Ready Event | When Bot Is Ready Bot Send A Message To Console + Bot Things When Bot Get Online Example : Handle Activity!
client.on("ready", async () => {
  console.log(`Ready To Go No Error So Far!`); //Console Message!
  client.user.setActivity(`watching all of yall :)`, { type: "PLAYING" }); //Bot Activity!
});

//Bot Login! Finally!
client.login(Token); //Bot Login With Token!

//copy and paste bot token | token is invalid | here create one if you don't have : paste it where? https://discord.com/developers/applications | click on new application
//and then put name of bot | i have the name and applicaiton ready, nope now go to [Bot] Category  check discord for image
