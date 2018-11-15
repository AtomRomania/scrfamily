const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
	if (!message.member.roles.find("name", "@everyone")) {
		message.channel.send('Perimisii invalide.');
		return;
	}
    
    // Check for inaput
  if (!args[0]) return message.channel.send('Examplu: >poll <intrebare>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") 
        .setFooter('Reactioneaza pentru a vota')
        .setDescription(args.join(' '))
        .setTitle(`Poll-ul a fost creat de catre ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
    name: "poll"
  }