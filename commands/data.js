const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()

     .setDescription("Cand ai intrat pe sv?")
     .addField("Ai intrat pe data de ", message.member.joinedAt)
     .setColor("#00ff00")
     message.channel.send(serverembed);
}

module.exports.help = {
    name:"data"
}