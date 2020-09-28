const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor());
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!rMember) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor().setAuthor(`${message.author.username} `, message.author.avatarURL).setTimestamp());
    let role = message.mentions.roles.first()

    if (!role) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor().setAuthor(`${message.author.username} `, message.author.avatarURL).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor().setAuthor(`${message.author.username} `, message.author.avatarURL).setTimestamp());

    if (rMember.roles.has(aRole.id)) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Kullanıcı Zaten Role Sahip.').setColor());
    await (rMember.addRole(aRole.id))
    message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`${rMember} Artık \`${role.name}\` Yetkisine Sahip! <a:2266_Rainbow_heart:742734313363079239>`).setColor(''));

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt', 'kayıt'],
  permLevel: "0"
};

exports.help = {
  name: "kayıt",
  description: "kayıt",
  usage: "kayıt"
};