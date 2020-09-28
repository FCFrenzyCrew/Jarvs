const Discord = require('discord.js')
const db = require('quick.db')
const fs = require('fs')

exports.run = (client, message, params, args, member) => {
  let gelengiden = JSON.parse(fs.readFileSync('./ayarlar/gelengiden.json', 'utf8'));
  var codeshare = message.mentions.channels.first()
  
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`<a:1603_Animated_Cross:730737161078571089> Dostum Buna Yetkin Yok Bunu Biliyor Olmalısın!<a:1603_Animated_Cross:730737161078571089> **`)
    db.delete(`hgbb_${message.guild.id}`, codeshare)
    message.channel.send("<a:9876_attention:730738007233265725>  **Giriş Çıkış Kapatıldı!**")

}  
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "giriş-çıkış-kapat"
}