const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Informatiile server-ului")
     .setColor("#00faf00")
     .setThumbnail(sicon)
     .addField("Numele server-ului", message.guild.name)
     .addField("Creat pe data de", message.guild.createdAt)
     .addField("Tu ai intrat pe data de", message.member.joinedAt)
     .addField("Membri", message.guild.memberCount)
     .setFooter(`Ownership: ${message.guild.owner.user.tag}`);

     message.channel.send(serverembed);
}

module.exports.help = {
    name:"serverinfo"
}