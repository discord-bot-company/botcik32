const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mute user.", 
    execute(message, args){
            
        let role = message.guild.roles.cache.find(r => r.name === "⁞ ―――Administracja――― ⁞")
        
        if(message.member.roles.cache.some(r => r.name === "⁞ ―――Administracja――― ⁞")){

         const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === '👫🏾・Członek');
                let muteRole = message.guild.roles.cache.find(role => role.name === '🔒・Mute');
                let QRole = message.guild.roles.cache.find(role => role.name === '👩🏻・Kobieta');
                let WRole = message.guild.roles.cache.find(role => role.name === '👦🏻・Mężczyzna');
                let ERole = message.guild.roles.cache.find(role => role.name === '💻・Programista');
                let RRole = message.guild.roles.cache.find(role => role.name === '⚔️・Minecraft');
                let TRole = message.guild.roles.cache.find(role => role.name === '🔫・Roblox');
                let YRole = message.guild.roles.cache.find(role => role.name === '🎮・CS:GO');
                let URole = message.guild.roles.cache.find(role => role.name === '⁞ ―――Server Roles――― ⁞');
                let IRole = message.guild.roles.cache.find(role => role.name === '⁞ ――――Poziomy―――― ⁞');
                let ORole = message.guild.roles.cache.find(role => role.name === '⁞ ―――Uprawnienia ―――⁞');
                let PRole = message.guild.roles.cache.find(role => role.name === '・𝙋𝙤𝙯𝙞𝙤𝙢 𝟱');
                let ARole = message.guild.roles.cache.find(role => role.name === '・𝙋𝙤𝙯𝙞𝙤𝙢 𝟰');
                let CRole = message.guild.roles.cache.find(role => role.name === '・𝙋𝙤𝙯𝙞𝙤𝙢 𝟯');
                let DRole = message.guild.roles.cache.find(role => role.name === '・𝙋𝙤𝙯𝙞𝙤𝙢 𝟮');
                let TTRole = message.guild.roles.cache.find(role => role.name === '・𝙋𝙤𝙯𝙞𝙤𝙢 𝟭');
                let IIRole = message.guild.roles.cache.find(role => role.name === '⁞ ―――Blokady ―――⁞');
                let PPPRole = message.guild.roles.cache.find(role => role.name === '🔐・Youtube');
                let PPPQRole = message.guild.roles.cache.find(role => role.name === '🔐・Delete Messages');
                let PPPFRole = message.guild.roles.cache.find(role => role.name === '🔐・Manage Roles');
                let PPPHHRole = message.guild.roles.cache.find(role => role.name === '🔐・Kick Users');
                let PPPVVRole = message.guild.roles.cache.find(role => role.name === '🔐・Ban Users');
                let PPPCCRole = message.guild.roles.cache.find(role => role.name === '⁞ ―――Bot ―――⁞');

    
                let memberTarget= message.guild.members.cache.get(target.id);
                
                if(!args[1]){
                    memberTarget.roles.remove(QRole.id);
                    memberTarget.roles.remove(CRole.id);
                    memberTarget.roles.remove(DRole.id);
                    memberTarget.roles.remove(TTRole.id);
                    memberTarget.roles.remove(IIRole.id);
                    memberTarget.roles.remove(PPPRole.id);
                    memberTarget.roles.remove(PPPQRole.id);
                    memberTarget.roles.remove(PPPFRole.id);
                    memberTarget.roles.remove(PPPHHRole.id);
                    memberTarget.roles.remove(PPPVVRole.id);
                    memberTarget.roles.remove(PPPCCRole.id);
                    memberTarget.roles.remove(WRole.id);
                    memberTarget.roles.remove(ERole.id);
                    memberTarget.roles.remove(RRole.id);
                    memberTarget.roles.remove(TRole.id);
                    memberTarget.roles.remove(YRole.id);
                    memberTarget.roles.remove(URole.id);
                    memberTarget.roles.remove(IRole.id);
                    memberTarget.roles.remove(ORole.id);
                    memberTarget.roles.remove(PRole.id);
                    memberTarget.roles.remove(ARole.id);
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> **Użytkownik został pomyślnie wyciszony.**`);
                    return
                }
                memberTarget.roles.remove(QRole.id);
                memberTarget.roles.remove(WRole.id);
                memberTarget.roles.remove(ERole.id);
                memberTarget.roles.remove(RRole.id);
                memberTarget.roles.remove(TRole.id);
                memberTarget.roles.remove(YRole.id);
                memberTarget.roles.remove(URole.id);
                memberTarget.roles.remove(IRole.id);
                memberTarget.roles.remove(ORole.id);
                memberTarget.roles.remove(PRole.id);
                memberTarget.roles.remove(ARole.id);
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> **Użytkownik został pomyślnie wyciszony na ${ms(ms(args[1]))}.**`);

                setTimeout(function () {
                    memberTarget.roles.add(mainRole.id);
                    memberTarget.roles.remove(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> **Użytkownik został pomyślnie odciszony.**`);
                }, ms(args[1]));
            } else{
                message.channel.send('Wystąpił problem, prosimy o kontakt z developerem systemu.');
            }
        }
    }
}
            
       
        