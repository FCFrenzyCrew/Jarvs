const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<a:1603_Animated_Cross:730737161078571089> Dostum Buna Yetkin Yok Bunu Biliyor Olmalısın!<a:1603_Animated_Cross:730737161078571089>')
  
    if (!args[0]) return message.channel.send('Komutu Kullanabilmek İçin `reklamkick aç veya kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send(` <a:9876_attention:730738007233265725> Reklam kick sistemi açıldı. Reklam yapanlar 3 uyarıdan sonra banlanıcaktır.`)

    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(` <a:9876_attention:730738007233265725> Reklam kick sistemi kapatıldı`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rk'],
    permLevel: 0
};

exports.help = {
    name: 'reklamkick',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};


















