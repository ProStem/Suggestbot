const { MessageEmbed } = require("discord.js");
const { Prefix, Token, Color, Owner } = require("../../config.js");
const db = require("quick.db");

module.exports = {
  name: "setsuggestionchannel",
  aliases: ["setsuggest", "ssc"],
  description: "Set Suggestion Channel!",
  category: "Members",
  run: async (client, message, args) => {
  message.channel.send(`working in f mode`)
  }
}; //check discord :D
