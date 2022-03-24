module.exports = {
    name: 'milenka',
    description: "Milenka tygodnia", 
    execute(message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#df88b7')
        .setTitle('MILENKA TYGODNIA')
        .setURL('https://discord.gg/X7MG6PWYjv')
        .setDescription('Milenką tygodnia jest!')
        .addFields(
            {name: 'OSKAR JAŚNIAK!', value: 'Gratulujemy!'},
        )
        .setImage('https://img.smyk.com/https://beta-cdn.smyk.com/media/product/760/1/peruka-meska-tupecik-kujon-brazowa-6909909.jpg')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    }
}