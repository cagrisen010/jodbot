module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1500) + 1000;
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Şuan yorgunsun, ${work.time.minutes} dakika sonra geri gel.`);
    else return message.reply(`Bir işte çalışarak kendine **${work.amount}** 💸 kazandın. Artık **${work.after}** 💸'ın var'.`);
};

module.exports.help = {
    name: "çalış",
    aliases: ['çalış'],
    usage: "çalış"
}
