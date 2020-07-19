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
      .setTitle(`New Suggestion!`)
      .setDescription(`${suggest}`)
      .setFooter(`By ${message.author.tag}`)
      .setTimestamp(); 
    message.guild.channels.cache.get(ch).send(em);

     msg.delete();
        console.log(message.startsWith(prefix))
        if (message.startsWith(prefix) != true) {
            return;
        } else {
            message = message.replace('!suggest ', '');
            msg.reply('Suggestion ' + message + ' has been submitted! Check <voting channel tag> to vote')
            client.channels.get('voting channel id').send('New Suggestion: ' + message)
                .then(function (message) {
                    message.react('✅');
                    message.react('❌');
                })
        }
    }
  };
