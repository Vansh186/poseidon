const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Calypso to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://images.creativemarket.com/0.1.0/ps/3865702/1820/1214/m1/fpnw/wm0/pose1-.png?1516282141&s=86773efd15367e1ed00a632a9a1f2461')
      .setDescription(oneLine`
        Click [here](https://discord.com/oauth2/authorize?client_id=850252921912164382&scope=bot&permissions=8)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/g37TrYWXbj) | ' +
        '[Repository](https://github.com/Vansh186/poseidon)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
