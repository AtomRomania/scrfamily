const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let bicon = bot.user.displayAvatarURL
     let botembed = new Discord.RichEmbed()
     .setDescription("Informatiile BOT-ului")
     .setColor("#00ff00")
     .setThumbnail(bicon)
     .addField("Numele bot-ului", bot.user.username)
     .addField("A fost creat pe data de", bot.user.createdAt);
     
     message.channel.send(botembed);
}

module.exports.help={
    name:"botinfo"
}