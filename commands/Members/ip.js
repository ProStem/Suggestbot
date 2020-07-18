const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "ip",
  aliases: ["ts"],
  description: "TeamSpeak IP: fivem.gamers-il.com
Server IP: connect 185.185.134.252:30120!",
  category: "Members",
  run: async (client, message, args) => {


    const dum = client.commands.get(args[0]);

    const dumembed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Command name : ${dum.name}!`)
      .addField(`Description`, dum.description)
      .addField(`Aliases`, dum.aliases || "No aliases!")
      .addField(`Category`, dum.category)
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);
    message.channel.send(dumembed);
  }
};
