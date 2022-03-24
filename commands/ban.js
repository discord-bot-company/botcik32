module.exports = {
    name: 'ban',
    description: "Ban user.", 
    execute(message, args){
        
        let role = message.guild.roles.cache.find(r => r.name === "7a ADMINPERMS")
        
        if(message.member.roles.cache.some(r => r.name === "7a ADMINPERMS"));

        if(message.member.permissions.has("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send("`| Administracja |` ** Użytkownik został pomyślnie wyrzucony i zbanowany z serwera ** `| Administracja |`");
            } else{
                message.channel.send('Użytkownik mógł nie zostać zbanowany. Prosimy o kontakt z developerem systemu | Kod błędu: 104.');
            }
        }
    } 
}

      