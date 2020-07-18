const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "ip",
  aliases: ["ts"],
  description: "Get Info",
  category: "Members",
  run: async (client, message, args) => {

    const dumembed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Info!`)
      .addField(`Ip`, `185.185.134.252:30120`, true)
      .addField(`TeamSpeak`, `fivem.gamers-il.com`, true) 
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(dumembed);
  }
};
