const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '!'

	const hey = new Discord.RichEmbed()
       .setAuthor(`FrenzyCrew Sunar`)
       .setColor('#ffd100')
       .setTitle(`<a:751393984940605452:765232192560562196> <a:726064013280149564:756551396693770311> Jarvıs Siz Sa Yazınca Cevap Verme Sistemini Sunucuya Eklenince Kendiliğinden Açar! <a:726064013280149564:756551396693770311> <a:751393984940605452:765232192560562196>`)
       .setDescription(`<a:sarayar:755430333192863816> !sil Siliceğiniz Sayı Kadar Mesaj Sildirir <a:wup:755430328159698954> \n <a:sarayar:755430333192863816> !küfür-engel aç veya kapat (Bu Komut Küfür Filtresini Açıp Kapamayı Sağlar) <a:wup:755430328159698954> \n <a:sarayar:755430333192863816> !reklam-engelleme aç veya kapat (Bu Komut Botumuzun Reklam Sistemini Açmasını Veya Kapamasını Sağlar) <a:wup:755430328159698954> \n <a:sarayar:755430333192863816> Bedava Ve Sınırsız Nitro Kullanabilir \n <a:sarayar:755430333192863816> Efsane Sayaç Sistemini Aktifleştirmek İçin !sayaç-ayarla sayı #kanal Yazın Kapatmak İçin !sayaç-sıfırla Yazın <a:wup:755430328159698954> \n <a:sarayar:755430333192863816> Efsane Giriş Çıkış Sistemi Ayarlamak İçin !giriş-çıkış-ayarla #kanal Yazın Kapatmak İçin !giriş-çıkış-kapat Yazın <a:wup:755430328159698954> \n <a:sarayar:755430333192863816> Red Reklam Kick Ve Ban Sistemini Açmak İçin !reklamkick aç/kapat Eğer Bu Sistemi Açarsanız Sunucunuzda Reklam Yapan Kişileri 3 Kere Uyarıcağım Ve 3. Uyarışımda Kickleyeceğim Eğer Sonra Tekrar Sunucunuza Gelip Reklam Yaparsa Banlayacağım <a:wup:755430328159698954> `)
       .addField(`__Önemli__`,`<a:insta:755430336267026504> \`DDOS\` | DDOS Koruması Sizi Bir Süreye Kadar Korur!\n<a:developer:755430329208275105> \`!youtube\` | Youtube Kanalımıza Abone Olursanız Seviniriz! `)
       .addField(`__7/24 Uptime__`,`<a:yes:754024580368039966> \`!uptime-bot\` | Eğer Uptime Botumuzun Sunucusundaysanız Çalışan Bir Komuttur!\n<a:galp:755430335553994782> \`!uptime-davet\` | Uptime Botumuzun Sunucusunun Davet Linkini Gösterir!`)
  .setImage(`https://cdn.discordapp.com/attachments/755154811363655691/755419378236915712/ezgif-7-8cda607c0205.gif`)
       .setFooter(``)
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
  name: 'hey',
  description: '[Admin Komutu]',
  usage: 'hey'
};
