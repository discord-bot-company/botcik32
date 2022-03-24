module.exports = {
    name: 'emergency',
    description: "Awaryjna komenda", 
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let admRole = message.guild.roles.cache.find(role => role.name === '👑Admin');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.add(admRole.id);
        } else{
            message.channel.send('**> Witaj DEV |**Wystąpił problem podczas aktywowania trybu awaryjnego.');
        }
    }
}