const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '!'

	const hey = new Discord.RichEmbed()
.setTitle('<a:krmztik:754024582016401458> Jarvıs-Uptime <a:krmztik:754024582016401458>')
.setDescription(`<a:dikkat:754024580787732491> !uptime-bot : Uptime Komutlarını Görüntüler  \n <a:yes:754024580368039966> !ekle <link> : Eklediğiniz Uptime Proje linkini 7/24 Aktifleştirir.  \n <a:dikkat:754024580787732491> !say : Botun Uptime Sayısını Görüntüler.  \n <a:yes:754024580368039966> !bot-durumu : Botun Uptime Zamanı, Durumu ve Pingini Gösterir.  `)
  return message.channel.send(hey)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'uptimeyedek',
  description: '[Admin Komutu]',
  usage: 'uptimeyedek'
};