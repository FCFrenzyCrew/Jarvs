const Discord = require('discord.js');

exports.run = function(client, message, args) {
    let bs = args.slice(0).join('+');
  
  let id = Number(args[0]);
  

   
    if(isNaN(id)) return message.channel.send("<a:success:730737395774914620> Lütfen Sayı Giriniz, Örnek: !sil 10");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<a:success:730737395774914620> Hey, Lütfen Temizlenecek Mikatarı Belirt!");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:726064013280149564:756551396693770311> ${args[0]} Adet Mesajı Başarıyla Sildim Dostum! <a:699642101733916994:757333446526763150> <a:756431334234259506:756544030833377280> `).then(msg => msg.delete(100000));
  
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['delete','süpür','temizle'],
  permLevel: 3
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};


