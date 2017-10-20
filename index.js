const Discord = require("discord.js");
const playstore = new Discord.Client();
const config = require("./config.json");

playstore.on('ready', () => {
  console.log(`Bot has started, with ${playstore.users.size} users, in ${playstore.channels.size} channels of ${playstore.guilds.size} guilds.`);
  console.log(`Logged in as ${playstore.user.tag}!`);
  console.log(`PlayStores is online`);

playstore.user.setGame(`=h | I has ${playstore.guilds.size} Servers`);
});
 // Prefix settings
playstore.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  // Add Command
  if (command === "add") {
    let numArry = args.map(n=> parseInt(n));
    let total = numArry.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);

  }
  
  if (command === "h") {
    message.reply("Sending.. Sending.. Sending...");
    message.author.sendMessage("List of commands:");
    message.author.sendMessage("``=say (Says what you tell it to.)``");
    message.author.sendMessage("``=avatar (Posts a pic of your profile pic.)``");
    message.author.sendMessage("``=ping (Shows how fast the bot is.)``");
    message.reply("Help has been sent!");
  }
  // list of shit
  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  }

  }
  // Shows persons profile picture
  if (command === "avatar") {
    message.reply(message.author.avatarURL);
  }
  // Working ping code
  if (command === "ping") {
      message.channel.sendMessage('Pong! Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
  }
  
});
// Token for bot to run
playstore.login(process.env.BOT_TOKEN);
