const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Nu am putut gasii comenzile.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} s-a incarcat!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
console.log(`${bot.user.username} este online!`);
  bot.user.setActivity("Scr Family: https://discord.gg/bJnXSpN",);
});

bot.on("guildMemberAdd", async member => {
 console.log(`${member.id} a intrat pe server`)

 let welcomechannel = member.guild.channels.find(`name`, `🔥-sʜᴏᴜᴛʙᴏx`)
 welcomechannel.send(`**Bun venit ${member} pe server-ul Scr Family (Nu uita sa te verifici #✅-ᴠᴇʀɪғʏ)**`)
});

bot.on("guildMemberRemove", async member => {
  
  console.log(`${member.id} a iesit de pe server`);
  
  let welcomechannel = member.guild.channels.find(`name`, "🔥-sʜᴏᴜᴛʙᴏx");
  welcomechannel.send(`**Din pacate ${member} a parasit server-ul Scr Family :frowning:**`)
});

bot.on("channelCreate", async channel => {
  console.log(`${channel.name} a fost creat`)

  let sChannel = channel.guild.channels.find(`name`, `logs-scr-bot`)
  sChannel.send(`${channel} a fost creat`)
});

bot.on("channelDelete", async channel => {
  console.log(`${channel.name} a fost sters.`)

  let sChannel = channel.guild.channels.find(`name`, "logs-scr-bot")
  sChannel.send(`"${channel.name}" a fost sters.`)
})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if(cmd === `${prefix}on`){
    return message.channel.send("**Sunt online** :white_check_mark: ")
  }
  if(cmd === `${prefix}botlink`){
    return message.channel.send(":heart: **Daca vrei sa ma adaugi pe server-ul tau, link-ul il ai aici !: https://discordapp.com/oauth2/authorize?client_id=511136218314964992&scope=bot&permissions=8**")
  }
  if(cmd === `${prefix}serverlink`){
    return message.channel.send("**Scr Family PERMANENT LINK: https://discord.gg/ket3t9S** ")
  }
  if(cmd === `${prefix}daily`){
    return message.channel.send("https://imgur.com/a/RddxxGQ, **GIF-ul Daily :grin:**")
  }

});
bot.login(botconfig.token);
