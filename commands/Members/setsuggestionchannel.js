const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "setsuggestionchannel",
  aliases: ["setsuggest", "ssc"],
  description: "Set Suggestion Channel!",
  category: "Administrators",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(`You don't have permission | require : Adminsitrator!`);
    }

    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(`${args[0]}`).name ||
      message.guild.channels.cache.find(x => x.name === `${args.join(" ")}`) ||
      message.channel;

    if (channel.type === "voice") {
      return message.channel.send(`Please give me valid text channel not voice channel!`);
    }

    db.set(`SuggestionChannel_${message.guild.id}`, channel.id);
    message.channel.send(
      new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Suggestion channel`)
        .setDescription(
          `Suggestion channel has been setted to : ${channel.name}`
        )
        .setTimestamp()
        .setFooter(`Setted by ${message.author.username}`)
    );
  }
};
