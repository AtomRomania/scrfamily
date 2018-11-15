const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let replies = ['MARRY :ring:', 'KILL :bomb:', 'FUCK :ok_hand:'];
    let result = Math.floor(Math.random() * replies.length);

    let makifuembed = new Discord.RichEmbed()

        .setDescription(`**${args[0]} a fost ales de <@${message.author.id}>**`)
        .setColor('RANDOM')
        .addField('Ai ales:', replies[result])
        .setFooter('Fuck, Marry, Kill!', bot.user.displayAvatarURL)
        .setTimestamp();

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, te rog mentioneaza un User!`).then(msg => {
        msg.delete(3000)
    });

    message.channel.send(makifuembed);

}
// Make sure you got exports.help || otherwise the command won't work!
module.exports.help = {
    name: "fmk",

    description: "fute, casatoreste si omoara",

    usage: "!fmk <user>"
}