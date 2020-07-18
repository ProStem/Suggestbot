const Discord = require("discord.js"); //Exporting Package | If You Ever Get Error [MODULE_NOT_FOUND] Than You Need To Install A Package!
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client(); //Creating A Client/Bot From Discord.js Package To Do Stuff!
const { Prefix, Token, Owner, Color } = require("./config.js"); //Exporting File Things File Name Config.js And Getting Things Like : Prefix Token And Owner ID!

//Ready Event | When Bot Is Ready Bot Send A Message To Console + Bot Things When Bot Get Online Example : Handle Activity!
client.on("ready", async () => {
  console.log(`Ready To Go No Error So Far!`); //Console Message!
  client.user.setActivity(`watching all of yall :)`, { type: "PLAYING" }); //Bot Activity!
});

client.on("message", async message => {
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
    return message.channel.send(new MessageEmbed()
                               .setColor(`${Color}`))
  }
})

//Bot Login! Finally!
client.login(Token); //Bot Login With Token!