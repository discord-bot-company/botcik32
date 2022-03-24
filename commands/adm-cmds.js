module.exports = {
    name: 'adm',
    description: "Lista komend administracji", 
    execute(message, args, discord) {
        if(message.member.roles.cache.some(r => r.name === "👑・Zarząd")){
            const newEmbed = new discord.MessageEmbed()
        .setColor('#c05851')
        .setTitle('[🔰] Lista komend administracyjnych [🔰]')
        .addFields(
            {name: '!ban [user] [Ⓜ️] ', value: 'Banuje użytkownika.'},
            {name: '!kick [user] [Ⓜ️]', value: 'Wyrzuca użytkownika.'},
            {name: '!mute [user] [Ⓜ️]', value: 'Wycisza użytkownika na zawsze, uniemożliwi mu to pisanie na kanałach tekstowych.'},
            {name: '!unmute [user] [Ⓜ️]', value: 'Odcisza użytkownika.'},
            {name: '!mute [user] [time] [Ⓜ️]', value: 'Wycisza użytkownika na określony czas, podczas podawania wartości czasu używaj: s-sekundy, h-godziny, d-dni.'},
        )
        .setImage('https://st.depositphotos.com/1054979/4137/v/600/depositphotos_41376003-stock-illustration-administration-stamp.jpg')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    } else{
        message.channel.send('Administrator systemu nie udzielił Ci dostępu do używania tej komendy.')
    }
}
}
    