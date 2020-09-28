const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '!'

	const hey = new Discord.RichEmbed()
.setTitle('<a:krmztik:754024582016401458> <a:726064013280149564:756551396693770311> Jarvıs-Uptime <a:726064013280149564:756551396693770311> <a:krmztik:754024582016401458>')
.setDescription(`<a:wup:755430328159698954> !uptime-bot : Uptime Komutlarını Görüntüler <a:699642101733916994:757333446526763150> \n <a:5614_Rainbow_Diamond:730745747833749555> !ekle <link> : Eklediğiniz Uptime Proje linkini 7/24 Aktifleştirir. <a:699642101733916994:757333446526763150> \n <a:wup:755430328159698954> !say : Botun Uptime Sayısını Görüntüler. <a:699642101733916994:757333446526763150> \n <a:5614_Rainbow_Diamond:730745747833749555> !bot-durumu : Botun Uptime Zamanı, Durumu ve Pingini Gösterir. <a:699642101733916994:757333446526763150> `)
.addField(`__Önemli__`,`<a:uptime:755430337211007047> \`Saat\` | Her 5 Günde Botumuz 1 Saat Kapatılıyor Sonra Tekrar Açılıyor!\n<a:722075942801113089:759407901570891806> \`Glitch Sınırı\` | Botlarınız 1000 Saat Sınırını Geçmemesi İçin Her Beş Günde Uptime Kesip Tekrar Açıyoruz! `)
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
  name: 'uptime-efso',
  description: '[Admin Komutu]',
  usage: 'uptime-bot'
};