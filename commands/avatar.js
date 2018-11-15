const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
        message.reply("Trebuie sa mentionezi pe cineva! Exemplu: >avatar @Memberu");
        return;
    } else {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL; 
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) 
            .setColor("RANDOM") 
            .setImage(image) 
        message.channel.send(embed); 
    }
}
module.exports.help = {
  name: "avatar"
}