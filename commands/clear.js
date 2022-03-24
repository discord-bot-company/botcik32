module.exports = {
    name: 'clear',
    description: 'Usuwa spam.',
    execute(message, args) {
        
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            if(!args[0]) return message.reply("Podaj wartość ilości wiadomości jaką chcesz usunąć.");
            if(isNaN(args[0])) return message.reply("Proszę podać prawdziwą wartość.");

            if(args[0] > 100) return message.reply("Nie masz uprawnień aby usuwać więcej niż 100 wiadomości na raz!");
            if(args[0] < 1) return message.reply("Minimalna ilość wiadomości do usunięcia to 1!");

            message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}
}