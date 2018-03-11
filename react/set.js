const translate = require('google-translate-api')
const int = require('../int.json')
exports.run = (client, message, args) => {
  const react = message.content.split(' ')[0].slice(int.prefix.length)
  var setValueTo = args.slice(1).join(" ")
  switch(args[0]) {
    case 'activity':
      client.user.setActivity(`${setValueTo}`)
      console.log(`Client user's activity setted to **${setValueTo}**.`)
      message.reply(`Client user's activity setted to **${setValueTo}**.`)
      break;
    case 'name':
      client.setNickname(`${setValueTo}`)
      if (message.guild.members.get(client.user.id).hasPermission('MANAGE_NICKNAMES') && message.guild.members.get(client.user.id).hasPermission('CHANGE_NICKNAME')) {
        message.guild.members.get(client.user.id).setNickname(`${setValueTo}`)
        console.log(`Client user's nickname setted to **${setValueTo}**.`)
        message.reply(`Client's nickname setted to **${setValueTo}**.`)
      } else {
        message.reply('I dont have the permissons to change my nickname in this server.')
      }
    default:
      message.reply('No entries')
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['settings'],
  permLevel: 3
}

exports.help = {
  name: 'set',
  description: 'Configure bot settings',
  usage: 'set <topic> <value>'
}
