const Discord = require('discord.js')
exports.run = (client, message, args) => {
  switch (message.content) {
    case ';학생증':
    var teacherrole = message.guild.roles.find('name', '교수')
    var adminrole = message.guild.roles.find('name', '교장')
    var studentrole = message.guild.roles.find('name', '학생')
    var moneypersonrole = message.guild.roles.find('name', '이사장')
    if (studentrole && message.member.roles.has(studentrole.id)) {
      var studentrole_first = message.guild.roles.find('name', '초등학생')
      var studentrole_second = message.guild.roles.find('name', '중학생')
      var studentrole_thrid = message.guild.roles.find('name', '고등학생')
      if (studentrole && message.member.roles.has(studentrole_first.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 초등학생. (~13세)`)
      } else if (studentrole && message.member.roles.has(studentrole_second.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 중학생. (~16세)`)
      } else if (studentrole && message.member.roles.has(studentrole_thrid.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 고등학생. (~19세)`)
      }
    } else if (adminrole && message.member.roles.has(adminrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 교장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교장직을 수여함.`)
    } else if (teacherrole && message.member.roles.has(teacherrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 교수**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교수직을 수여함.`)
    } else if (moneypersonrole && message.member.roles.has(moneypersonrole.id)) {
      var embed = new Discord.RichEmbed()
        .setColor(4620980)
        .setTitle(`${message.author.tag}`)
        .setThumbnail(`${message.author.avatarURL}`)
        .setURL(`${message.author.avatarURL}`)
        .setDescription(`**${message.author.username} 이사장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 약 1조억을 기부하였으므로 그 의미에서 이사장직을 수여함. hwang1ws에게만 열혈한 ReVeluv`)
    }
    message.channel.send({embed})
      break;
    case ';민증':
      var teacherrole = message.guild.roles.find('name', '교수')
      var adminrole = message.guild.roles.find('name', '교장')
      var studentrole = message.guild.roles.find('name', '학생')
      var moneypersonrole = message.guild.roles.find('name', '이사장')
      if (studentrole && message.member.roles.has(studentrole.id)) {
        var studentrole_first = message.guild.roles.find('name', '초등학생')
        var studentrole_second = message.guild.roles.find('name', '중학생')
        var studentrole_thrid = message.guild.roles.find('name', '고등학생')
        if (studentrole && message.member.roles.has(studentrole_first.id)) {
          var embed = new Discord.RichEmbed()
            .setColor(4620980)
            .setTitle(`${message.author.tag}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setURL(`${message.author.avatarURL}`)
            .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 초등학생. (~13세)`)
        } else if (studentrole && message.member.roles.has(studentrole_second.id)) {
          var embed = new Discord.RichEmbed()
            .setColor(4620980)
            .setTitle(`${message.author.tag}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setURL(`${message.author.avatarURL}`)
            .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 중학생. (~16세)`)
        } else if (studentrole && message.member.roles.has(studentrole_thrid.id)) {
          var embed = new Discord.RichEmbed()
            .setColor(4620980)
            .setTitle(`${message.author.tag}`)
            .setThumbnail(`${message.author.avatarURL}`)
            .setURL(`${message.author.avatarURL}`)
            .setDescription(`**학생:${message.author.username}**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교 고등학생. (~19세)`)
        }
      } else if (adminrole && message.member.roles.has(adminrole.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**${message.author.username} 교장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교장직을 수여함.`)
      } else if (teacherrole && message.member.roles.has(teacherrole.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**${message.author.username} 교수**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에서 교수직을 수여함.`)
      } else if (moneypersonrole && message.member.roles.has(moneypersonrole.id)) {
        var embed = new Discord.RichEmbed()
          .setColor(4620980)
          .setTitle(`${message.author.tag}`)
          .setThumbnail(`${message.author.avatarURL}`)
          .setURL(`${message.author.avatarURL}`)
          .setDescription(`**${message.author.username} 이사장**, 쿼드라 매지컬 엔지니어링 퍼실리티 부속 중등교육학교에 약 1조억을 기부하였으므로 그 의미에서 이사장직을 수여함. hwang1ws에게만 열혈한 ReVeluv`)
      }
      message.channel.send({embed})
      break;
  }
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['학생증', '민증'],
  permLevel: 0
}

exports.help = {
  name: 'qmeps',
  description: 'qmeps',
  usage: 'qmeps'
}
