const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:1603_Animated_Cross:730737161078571089> Dostum Buna Yetkin Yok Bunu Biliyor Olmalısın!<a:1603_Animated_Cross:730737161078571089>`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım Bu Özellik Önceden Açılmış!`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`<a:756431334234259506:756544030833377280> Güçlü Küfür Sistemi Artık Aktif!`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'küfür2',
  description: 'güçlüküfür', 
  usage: 'güçlüküfür'
};
