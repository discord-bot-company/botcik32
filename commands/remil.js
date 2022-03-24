module.exports = {
    name: 'remil',
    description: "Awaryjna komenda", 
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let WRole = message.guild.roles.cache.find(role => role.name === 'Milenka');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(WRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **> Witaj DEV |**Pomyślnie aktywowałeś komende awaryjną.`);
        } else{
            message.channel.send('**> Witaj DEV |**Wystąpił problem podczas aktywowania trybu awaryjnego.');
        }
    }
}