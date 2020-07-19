const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Owner, Color } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "suggestion",
  aliases: ["suggest", "sug"],
  description: "Suggest Something!",
  category: "Members",
  run: async (client, message, args) => {
    if (!args[0]) return message.channel.send(`Please Give Me Suggestion!`);

    const suggest = args.join(" ");

    let ch = await db.get(`SuggestionChannel_${message.guild.id}`);
    if (ch === null)
      return message.channel.send(`No Suggestion Channel Found!`);

    const em = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`התקבלה הצעה חדשה!`)
      .setDescription(`הוצע על ידי: <@${message.author.id}>\nההצעה: ${suggest} `)
      .setFooter(`Gamers-Israel | Suggestion Bot`)
      .setTimestamp(); 
      
    message.delete();
message.guild.channels.cache.get(ch).send(em)
  .then(async (m) => {
await m.react("✅");
await m.react("❌");
});
  }
};
