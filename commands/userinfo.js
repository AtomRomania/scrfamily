const Discord = require('discord.js');
const moment = require("moment");

exports.run = async (client, message, args) => {
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);
	
	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Contul a fost creat pe data de:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Cand ai intrat pe server? :", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status-ul:", `${user.presence.status}`, true)
		.addField("Ce te joci acum?:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Role-uri:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter("T R 3 W A Y", bot.user.displayAvatarURL)
     message.channel.send({embed});
    }
module.exports.help={
    name:"userinfo"
}