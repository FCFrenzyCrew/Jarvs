const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:1603_Animated_Cross:730737161078571089> Dostum Buna Yetkin Yok Bunu Biliyor Olmalısın!<a:1603_Animated_Cross:730737161078571089>`);
  if (!db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım Bu Özellik Önceden Açılmış!`)
}
  db.delete(`küfürE_${message.channel.id}`)
  message.reply(`<a:not:754024581102305370> Sadece Bu Kanal İçin Güçlü Küfür Filtresini Kapattım. <a:not:754024581102305370>`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'küfür2-kapat',
  description: 'güçlü-küfür-kapat', 
  usage: 'güçlü-küfür-kapat'
};
