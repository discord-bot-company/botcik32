module.exports = {
    name: 'reg',
    description: "Milenka tygodnia", 
    execute(message, args, discord) {
        const newEmbed = new discord.MessageEmbed()
        .setColor('#ea850b')
        .setTitle('REGULAMIN SERWERA 7A')
        .setDescription('Prosimy o zapoznanie się z poniższym regulaminem.')
        .addFields(
            {name: 'Punkt 1', value: 'Zabrania się reklamowania innych serwerów/społeczności na kanałach tekstowych serwera oraz w wiadomościach prywatnych użytkowników.'},
            {name: 'Punkt 2', value: 'Zabrania się wklejania linków afiliacyjnych.'},
            {name: 'Punkt 3', value: 'Zabrania się umieszczania linków skróconych do treści, której Odbiorca nie może przewidzieć.'},
            {name: 'Punkt 4', value: 'Nazwa użytkownika nie może być wulgarna, obraźliwa oraz nie może zawierać reklamy innego serwera.'},
            {name: 'Punkt 5', value: 'Szczególnie nazwa nie może posiadać skrótów powszechnie uważanych za obraźliwe lub niestosowne.'},
            {name: 'Punkt 6', value: 'Zakazuje się promowania piractwa.'},
            {name: 'Punkt 7', value: 'Zabrania się udostępniania spraw prywatnych na serwerze Discord.'},
            {name: 'Punkt 8', value: 'Użytkownik zobowiązany jest do zachowania kultury wypowiedzi.'},
            {name: 'Punkt 9', value: 'Zabrania się tym samym używania skrótów uznawanych powszechnie za obraźliwe lub niestosowne.'},
            {name: 'Punkt 10', value: 'Zabrania się "popędzania" Administracji w celu szybszego rozwiązania sprawy na Forum serwera.'},
            {name: 'Punkt 11', value: 'Zabrania się robienia tzw. tyralni na kanałach głosowych.'},
            {name: 'Punkt 12', value: 'Zabrania się nagrywania rozmów na kanałach głosowych bez zgody wszystkich jej uczestników.'},
            {name: 'Punkt 13', value: 'Zabrania się nadmiernego pingowania.'},
            {name: 'Punkt 14', value: 'Zabrania się omijania kar nałożonych przez Administrację.'},
            {name: 'Punkt 15', value: 'Zabrania się umieszczania na serwerze treści pornograficznych, rasistowskich, bądź uznawanych powszechnie za niestosowne NSFW.'},
            {name: 'Punkt 16', value: 'Kwestie nieujęte w Regulaminie rozpatrywane są indywidualnie przez Administrację.'},
            {name: 'Punkt 17', value: 'Regulamin wchodzi w życie w momencie jego utworzenia/zmiany.'},
            {name: 'Punkt 18', value: 'Administracja zastrzega sobie prawo do zmiany regulaminu w dowolnym momencie.'}, 
        )
        .setImage('https://cdn.discordapp.com/attachments/941584113721290792/955554658850578512/wstazka-Regulamin.png')
        .setFooter('Made by Pan Jakub');

        message.channel.send(newEmbed);
    }
}

































