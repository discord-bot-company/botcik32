module.exports = {
    name: 'kick',
    description: "Kick user.", 
    execute(message, args){
        
        let role = message.guild.roles.cache.find(r => r.name === "7a ADMINPERMS")
        
        if(message.member.roles.cache.some(r => r.name === "7a ADMINPERMS"));

        if(message.member.permissions.has("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send("`| Administracja |` ** Użytkownik został pomyślnie wyrzucony z serwera ** `| Administracja |`");
            } else{
                message.channel.send('Użytkownik mógł nie zostać wyrzucony. Prosimy o kontakt z developerem systemu.');
            }
        }
    } 
}

      