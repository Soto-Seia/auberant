const int = require('../int.json')
module.exports = message => {
  if (message.content.includes('바보') || message.content.includes('바부')) {
    message.delete()
    return
  }
  if (message.content.includes('discord.gg') || message.content.includes('discordapp.com/invite')) {
    if (message.guild.id === '383944425648422912') {
      message.delete()
    }
    return
  }
  if (message.author.bot) return

// Get inks!
const Enmap = require('enmap')
account = new Enmap({name: 'account'})

const openAccount = account.get(message.author.username)
if (!openAccount) {
  account.set(message.author.username, 1)
} else {
  account.set(message.author.username, openAccount + 1)
}

  let client = message.client
  //if (message.author.bot) return
  if (!message.content.startsWith(int.prefix)) return

  let react = message.content.split(' ')[0].slice(int.prefix.length)
  let args = message.content.split(' ').slice(1)
  let perms = client.elevation(message)
  let rct

  if (client.reacts.has(react)) {
    rct = client.reacts.get(react)
  } else if (client.aliases.has(react)) {
    rct = client.reacts.get(client.aliases.get(react))
  }
  if (rct) {
    if (perms < rct.conf.permLevel) return
    rct.run(client, message, args, perms)
  }
}
