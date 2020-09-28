const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` **<a:9876_attention:730738007233265725> Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.**`)
  if (!args[0]) return message.channel.send(`<a:9876_attention:730738007233265725> **Küfür-Engel Sistemi Ayarlamak İçin \`!küfür-engel aç\` | Kapatmak İstiyorsanız \`!küfür-engel kapat\` Yazabilirsiniz**`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`<a:9876_attention:730738007233265725> Küfür Engel Ayarlamak İçin \`!küfür aç\` | Kapatmak İstiyorsanız \`!küfür kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`**<a:yeiltik:754024582045892700> Küfür Engelleme Sistemi Başarıyla Ayarlandı**`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`**<a:9876_attention:730738007233265725> Küfür Engellemeyi Açtığına Emin Misin?.**`)
    
    
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`**<a:krmztik:754024582016401458> Küfür Engelleme Sistemi Kapatıldı.**`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfür-filtresi', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfür',
 usage: 'gkanal'
};