const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<a:9876_attention:730738007233265725> Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`<a:9876_attention:730738007233265725> Reklam engelleme sistemini açmak için \`!reklam aç\` yazabilirsiniz. \<a:9876_attention:730738007233265725> Reklam filtresini kapatmak için \`!reklam kapat\` yazabilirsiniz. `)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`<a:9876_attention:730738007233265725> Reklam engelleme sistemini açmak için \`!reklam aç\` yazabilirsiniz. \<a:9876_attention:730738007233265725> Reklam filtresini kapatmak için \`!reklam kapat\` yazabilirsiniz. `)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`<a:success:730737395774914620> Reklam filtresini ayarladım.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`<a:success:730737395774914620> Reklam filtresini açtığına emin misin?`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`<a:success:730737395774914620> Reklam filtresini kapattım.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 3
};

exports.help = {
 name: 'reklam-engelleme',
 description: 'reklamm',
 usage: 'Reklam'
};
