const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Sa fii sigur ca mentionezi pe cnv!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Imbratisare! c:")
    .setDescription(`**${message.author.username}** a imbratisat/o pe **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("T R 3 W A Y", bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
module.exports.help = {
	name: "hug"
}