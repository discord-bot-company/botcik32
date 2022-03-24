const discord = require('discord.js');

const client = new discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
 
const prefix = '!';

const fs = require('fs');

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('K7BOT zostal wlczony ponownie przez Pan Jakub!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '⁞ ―――Server Roles――― ⁞');
    let welcomeARole = guildMember.guild.roles.cache.find(role => role.name === '⁞ ――――Poziomy―――― ⁞');
    let welcomeBRole = guildMember.guild.roles.cache.find(role => role.name === '⁞ ―――Uprawnienia ―――⁞');
    let welcomeCRole = guildMember.guild.roles.cache.find(role => role.name === '⁞ ―――Blokady ―――⁞');
    let welcomeDRole = guildMember.guild.roles.cache.find(role => role.name === '👫🏾・Członek');

    guildMember.roles.add(welcomeRole);
    guildMember.roles.add(welcomeARole);
    guildMember.roles.add(welcomeBRole);
    guildMember.roles.add(welcomeCRole);
    guildMember.roles.add(welcomeDRole);
    guildMember.guild.channels.cache.get('941584669382672384').send(`> **Witamy** <@${guildMember.user.id}>, mamy nadzieję że spodoba Ci się u nas! 😎💪`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/) 
    const command = args.shift().toLowerCase();

    if(command === 'yt-p'){
        client.commands.get('yt-p').execute(message, args, discord);
    } else if (command == 'yt-m'){
        client.commands.get('yt-m').execute(message, args, discord);
    } else if (command == 'pomoc'){
        client.commands.get('pomoc').execute(message, args, discord);
    } else if (command == 'milenka'){
        client.commands.get('milenka').execute(message, args, discord);
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, discord);
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args, discord);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args, discord);
    } else if (command === 'mute'){
        client.commands.get('mute').execute(message, args, discord);
    } else if (command === 'emergency'){
        client.commands.get('emergency').execute(message, args, discord);
    } else if (command === 'remil'){
        client.commands.get('remil').execute(message, args, discord);
    } else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args, discord);
    } else if (command === 'yo'){
        client.commands.get('yo').execute(message, args, discord);
    } else if (command === 'adm'){
        client.commands.get('adm').execute(message, args, discord);
    } else if (command === 'head'){
        client.commands.get('head').execute(message, args, discord);
    } else if (command === 'mod'){
        client.commands.get('mod').execute(message, args, discord);
    } else if (command === 'admin'){
        client.commands.get('admin').execute(message, args, discord);
    } else if (command === 'reg'){
        client.commands.get('reg').execute(message, args, discord);
    } else if (command === 're-emergency'){
        client.commands.get('re-emergency').execute(message, args, discord);
    } else if (command === 'rrr'){
        client.commands.get('rrr').execute(message, args, discord);
    }
}); 

client.login('OTQ1NDE2NTQ3MjczNDI0OTg4.YhP1xQ.3DLJ3mrcRA6qTtoI55oPBYiUeEk');
