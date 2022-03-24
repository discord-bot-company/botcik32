module.exports = {
    name: 'yt-m',
    description: "Kanał Maurycego", 
    execute(message, args, discord) {
        if(message.member.roles.cache.some(r => r.name === "7a YTPERMS")){
            const newEmbed = new discord.MessageEmbed()
        .setColor('#c05851')
        .setTitle('SPRAWDŹ KANAŁ MAUROJUSZA!')
        .setURL('https://www.youtube.com/channel/UCIRE_ACY9rfQdqcttO5dRnQ')
        .addFields(
            {name: 'Serdecznie zapraszamy do odwiedzenia jednego z lepszych kanałów w polsce!', value: 'Miłego Dnia!'},
        )
        .setImage('https://yt3.ggpht.com/Vy7hTYTROhYzqaI7XxlFC5k7_ajwjwY1JPsIVRoFxa2nvLlA8cQJnDL5yDrAXrCoRhp9IxAti4Q=s176-c-k-c0x00ffffff-no-rj')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    } else{
        message.channel.send('Tylko właściciel kanału może pozwolić Ci na jego oglądanie, tylko on posiada permisje do wysyłania wiadomości EMBED zawierającą treść jego kanału!')
    }
}
}