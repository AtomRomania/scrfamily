const Discord = module.require("discord.js");

let ccreator = ("Max");

let ccommunity = ("Scr Family");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(bicon)
        .addField("Numele creator-ului", ccreator)
        .addField("Cea mai tare comunitate", ccommunity)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}