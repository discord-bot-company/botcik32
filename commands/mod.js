module.exports = {
    name: 'mod',
    description: "Awaryjna komenda", 
    execute(message, args){
        
        let role = message.guild.roles.cache.find(r => r.name === "👑・Zarząd")
        
        if(message.member.roles.cache.some(r => r.name === "👑・Zarząd")){
            const target = message.mentions.users.first();
        if(target){
            let admRole = message.guild.roles.cache.find(role => role.name === 'Ⓜ️・Moderator');
            let mainRole = message.guild.roles.cache.find(role => role.name === '⁞ ―――Administracja――― ⁞');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.add(admRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> ** Witaj ✅ |**Użytkownik został pomyślnie awansowany na stanowisko moderatora serwera.`);
        }

        } else{
            message.channel.send('**Witaj ❌ |**Użytkownik nie został awansowany na stanowisko moderatora serwera.');
        }
    }
}