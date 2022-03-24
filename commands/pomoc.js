module.exports = {
    name: 'pomoc',
    description: "Poniżej wyświetlone zostały najważniejsze komendy.", 
    execute(message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#0d56f0')
        .setTitle('POMOC')
        .setURL('https://discord.gg/X7MG6PWYjv')
        .setDescription('Witaj drogi użytkowniku. Aby Ci pomóc w korzystaniu z owego bota wyświetlam Ci najpotrzebniejsze Ci komendy. Miłego dnia')
        .addFields(
            {name: '!pomoc', value: 'Wyświetla wszystkie komendy 👥'},
            {name: '!yt-m', value: 'Wyświetla kanał Maurycego 👍' },
            {name: '!yt-p', value: 'Wyświetla kanał Pawła 👍'},
            {name: '!milenka', value: 'Wyświetla milenke tygodnia. 😐'},
            {name: '!yo', value: 'Sprawdź a się dowiesz. 🤭'},
        )
        .setImage('https://st3.depositphotos.com/7752738/12891/v/600/depositphotos_128917830-stock-illustration-hand-holding-placard-with-help.jpg')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    }
}