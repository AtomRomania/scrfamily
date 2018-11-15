const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setDescription("Meniul de ajutor General")
    .setColor("#8300ff")
    .addField("*Comenzile membru*", "**Help, Serverinfo, Botinfo, Userinfo, Avatar, Credits si Bill** :snowman2:")
    .addField("*Mini-Games*", "**Gay, Roulette, Fmk si PHF ( Piatra Hartie Foarfeca )**:snowman2:!")
    .addField("*RolePlay*", "**Hug si Kiss ( Momentan )**:snowman2:");

    message.channel.send(helpembed);
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .setDescription("Comenzile de Admin")
    .setColor("#8300ff")
    .addField("Comenzile de Admin", "Kick, Warn, Ban, Spune, Tempmute, Poll & on (sa vezi daca bot-ul nu e stricat) :smirk:  ");

    try{
        await message.author.send(modembed);
    }catch(e){
        message.reply("Ai DM-ul blocat si nu uiti pot trimite lista :( ");
     }
    }

}

module.exports.help = {
    name: "help"
}