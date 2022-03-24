module.exports = {
    name: 'yt-p',
    description: "Kanał Pawła", 
    execute(message, args, discord) {
        if(message.member.roles.cache.some(r => r.name === "7a YTPERMS")){
            const newEmbed = new discord.MessageEmbed()
        .setColor('#c05851')
        .setTitle('SPRAWDŹ KANAŁ PAWŁA!')
        .setURL('https://www.youtube.com/channel/UC3Zpdp2dV0Q_ztsoomP1_Ag')
        .addFields(
            {name: 'Serdecznie zapraszamy do odwiedzenia jednego z lepszych kanałów w polsce!', value: 'Miłego Dnia!'},
        )
        .setImage('https://yt3.ggpht.com/ytc/AKedOLRtFckfzz_tOF5m8NGVdWdPqxzJ20Pkd2udYw=s176-c-k-c0x00ffffff-no-rj-mo')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    } else{
        message.channel.send('Tylko właściciel kanału może pozwolić Ci na jego oglądanie, tylko on posiada permisje do wysyłania wiadomości EMBED zawierającą treść jego kanału!')
    }
}
}
        