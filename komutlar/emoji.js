const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "755479767251157053"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send("Discord Emoji Rolüne Zaten Sahipsin.")
  message.member.addRole(role);
  message.channel.send(`Discord Emoji rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji','emoji'],
  permLevel: 0
};

exports.help = {
  name: 'emoji',
  description: 'Discord Emoji kanallarına erişim sağlar.',
  usage: 'emoji'
};

