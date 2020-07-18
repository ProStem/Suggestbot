const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const { Prefix, Token, Owner, Color } = require("./config.js");
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.descriptions = new Discord.Collection();

//Ready Event
client.on("ready", async () => {
  console.log(`Ready To Go No Error So Far!`); //Console Message!
  client.user.setActivity(`Ping me for Help!`, { type: "PLAYING" }); //Bot Activity!
});

let modules = [
  "Members"
];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name}.js - Successfully loaded!`);
      if (command.name) client.commands.set(command.name, command);
      if (command.description) {
        client.descriptions.set(command.description, command.description);
      }
      if (command.aliases) {
        command.aliases.forEach(alias => client.aliases.set(alias, command.name));
      }
    });
  });
});

client.on("message", async message => {
  if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
    return message.channel.send(
      new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Information`)
        .setDescription(`Bot prefix : ${Prefix} | Help command: ${Prefix}help`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`)
    );
  }
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
    

  if (message.channel.type === "dm") {
    if (message.author.bot) return;
    return console.log(
      `\n${message.channel.recipient.tag}'s DMs:\n\t${message.author.tag}: ${message.content}\n`
    );
  }

  if (message.author.bot) return;

  if (message.content.indexOf(Prefix)) return;

  let messageArray = message.content.split(` `);
  let args = messageArray.slice(1);
  let cmd = messageArray[0].toLowerCase();

  let command =
    client.commands.get(cmd.slice(Prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(Prefix.length)));
  if (command) command.run(client, message, args);
    
  });

client.login(Token); //Bot Login With Token!
