const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Nu am putut gasii user-ul!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Nu pot sa ii dau ban!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Acea persoana nu poate fii data afara");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("RANDOM")
    .addField("Utilizator-ul banat", `${bUser} cu ID-ul ${bUser.id}`)
    .addField("A fost banat de catre", `<@${message.author.id}> cu ID-ul ${message.author.id}`)
    .addField("Timp", message.createdAt)
    .addField("Motiv", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "logs-scr-bot");
    if(!incidentchannel) return message.channel.send("Nu imi pot gasii camera pentru raport.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}