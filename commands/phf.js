const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
  
    let rock2 = ["Hartie! Eu am castigat!", "Foarfeca! Tu ai castigat!"]
    let rock1 = Math.floor(Math.random() * rock2.length);
  
    let paper2 = ["Piatra! Eu am castigat!", "Foarfeca, eu am castigat!"]
    let paper1 = Math.floor(Math.random() * paper2.length);
  
    let scissors2 = ["Piatra! Eu am castigat!", "Hartie! Tu ai castigat!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);
  
  let rock = new Discord.RichEmbed()
  .setAuthor("Piatra, Hartie, Foarfeca")
  .setColor("RANDOM")
  .addField("Tu ai ales", `${args[0]}`)
  .addField("Eu am ales", rock2[rock1])
  
  let paper = new Discord.RichEmbed()
  .setAuthor("Piatra, Hartie, Foarfeca")
  .setColor("RANDOM")
  .addField("Tu ai ales", `${args[0]}`)
  .addField("Eu am ales", paper2[paper1])
  
  let scissors = new Discord.RichEmbed()
  .setAuthor("Piatra, Hartie, Foarfeca")
  .setColor("RANDOM")
  .addField("Tu ai ales", `${args[0]}`)
  .addField("Eu am ales", scissors2[scissors1])
  
  
  if (message.content === ">rps rock") message.channel.send(rock)
  if (message.content === ">rps Rock") message.channel.send(rock)
  if (message.content === ">rps r") message.channel.send(rock)
  
  if (message.content === ">rps paper") message.channel.send(paper)
  if (message.content === ">rps Paper") message.channel.send(paper)
  if (message.content === ">rps p") message.channel.send(paper)
  
  if (message.content === ">rps scissors") message.channel.send(scissors)
  if (message.content === ">rps Scissors") message.channel.send(scissors)
  if (message.content === ">rps s") message.channel.send(scissors)
  
  
  if (message.content === ">rps") message.channel.send("Optiuni: ``Piatra``, ``Hartie``, ``Foarfeca``. *Exemplu: >rps <optiune>*")
  }

module.exports.help = {
   name: "phf"
}