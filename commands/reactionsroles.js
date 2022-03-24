module.exports = {
    name: 'rrr',
    description: "Milenka tygodnia", 
    execute(message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#ce7e00')
        .setTitle('WAŻNE KOORDYNATY!')
        .setDescription('Na tym kanale bot będzie wysyłał ważne koordynaty z serwera minecraft.')
        .addFields(
            {name: 'Zastowsowanie 👨🏻‍🔬', value: 'System będzie wysyłał na tym kanale wazne dla graczy kordy z serwera klasowego minecraft.'},
        )
        .setImage('https://www.gamepressure.com/i/h/17/345212490.jpg')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    }
}