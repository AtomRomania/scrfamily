const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Nu am putut gasii user-ul!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("N-ai acces bos!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acea persoana nu poate fii data afara!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("User-ul dat afara", `${kUser}`)
    .addField("A fost dat afara de catre", `<@${message.author.id}>`)
    .addField("Comanda a fost executata in channel-ul", message.channel)
    .addField("Timpul", message.createdAt)
    .addField("Motiv", kReason);

    let kickChannel = message.guild.channels.find(`name`, "logs-scr-bot");
    if(!kickChannel) return message.channel.send("Nu am putut gasii camera logs-scr-bot");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}