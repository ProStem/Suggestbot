const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "lawsuit",
  aliases: ["suggest", "sue"],
  description: "Sue Somone!",
  category: "Members",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please Give Me Lawsuit!`);

    const suggest = args.join(" ");

    let ch = await db.get(`SuggestionChannel_${message.guild.id}`);
    if (ch === null)
      return message.channel.send(`No Suggestion Channel Found!`);

    const em = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`התקבלה תביעה חדשה!`)
      .setDescription(`התביעה הוגשה על ידי: <@${message.author.id}>\nהתביעה: ${suggest} `)
      .setFooter(`Gamers-Israel | Court Bot`)
      .setTimestamp(); 
      
    message.delete();
message.guild.channels.cache.get(ch).send(em)
 

  }
};
