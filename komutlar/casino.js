module.exports.execute = async (client, message, args) => {
  
  let kazanilacak = [""]
    let amount = Math.floor(Math.random() * kazanilaca)
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Şu anda çalışmak için fazla yorgunsun ${work.time.minutes} dakika ve ${work.time.seconds} saniye sonra geri gel.`);
    else return message.reply(`Yaşasın! Çalışarak, **${work.amount}** 💸 kazandın. Şuanki paran: **${work.after}** 💸.`);
};

module.exports.help = {
    name: "casino",
    aliases: ["casino"],
    usage: "casino"
}
