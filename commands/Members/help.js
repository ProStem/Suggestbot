const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help command!",
  category: "Members",
  run: async (client, message, args) => {
    
    let checkdes;
    if (message.member.hasPermission("ADMINISTRATOR")) {
      checkdes = `setsuggestionchannel - setsuggest - ssc, suggestion - suggest, Ip - Ts`;
    } else {
      checkdes = `suggestion - suggest, Ip - Ts`
    }
    
    const embednor = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`All Commands List!`)
      .setDescription(
        `${checkdes}`
      )
      .setTimestamp()
      .setFooter(`Requested by ${message.author.username}`);

    if (!args[0]) return message.channel.send(embednor);

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
