module.exports = {
    name: 'unmute',
    description: "Unmute user.", 
    execute(message, args){
            
        let role = message.guild.roles.cache.find(r => r.name === "7a ADMINPERMS")
        
        if(message.member.roles.cache.some(r => r.name === "7a ADMINPERMS")){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '👫🏾・Członek');
                let muteRole = message.guild.roles.cache.find(role => role.name === '🔒・Mute');

                let memberTarget= message.guild.members.cache.get(target.id);
    
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> **Użytkownik został pomyślnie odciszony.**`);
            } else{
                message.channel.send('Wystąpił problem, prosimy o kontakt z developerem systemu.');
            }
        }
    }
}