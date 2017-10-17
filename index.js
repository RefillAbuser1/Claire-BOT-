const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

bot.user.setPresence({game: {name: 'prefix: = | =help', type:0 } });
});

bot.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "add") {
    let numArry = args.map(n=> parseInt(n));
    let total = numArry.reduce( (p, c) => p+c);

    message.channel.sendMessage(total);
  } 

  if (command === "say") {
    message.channel.sendMessage(args.join(" "));
  } 

  if (command === "invite") {
    message.channel.sendMessage("Invite: https://discord.gg/r4aBuTw");
  } 

  if (command === "donate") {
    message.channel.sendMessage("Help CriticalGamers stay online! | paypal.me/ServerSupport |");
  } 
  
  if (command === "help") {
	 message.channel.sendMessage("Commands: say, donate | do =invite for support |");
  }
  
});

bot.login(process.env.BOT_TOKEN);