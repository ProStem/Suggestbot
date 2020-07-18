const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "suggestion",
  aliases: ["suggest"],
  description: "Suggest Something!",
  category: "Members",
  run: async (client, message, args) => {

    if (!args[0]) return message.channel.send(`Please Give Me Suggestion!`);
    
    const suggest = args.join(" ");
    
    let ch = await db.fetch(`SuggestionChannel`);
    if (ch === null) return message.channel.send(`No Suggestion Channel Found!`);
    
    Let Date = new Date();
    
    const em = new MessageEmbed()
    .setColor(`${Color}`)
    .setTitle(`New Suggestion!`)
    .setDescription(`${suggest}`)
    .setFooter(`By ${message.author.tag} | Date : ${}`)
    
  }
};
