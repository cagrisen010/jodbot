module.exports.execute = async (client, message, args) => {
  
  let kazanilacak = ["10", "-10"]
    let amount = Math.floor(Math.random() * kazanilacak.lenght);
    let work = client.eco.work(client.ecoAddUser, amount);
    if (work.onCooldown) return message.reply(`Bu kadar fazla casino oynanılmaz ${work.time.minutes} dakika ve ${work.time.seconds} saniye sonra geri gel.`);
    else return message.reply(`Yaşasın! Casinoda, **${work.amount}** 💸 kazandın. Şuanki paran: **${work.after}** 💸.`);
};

module.exports.help = {
    name: "casino",
    aliases: ["casino"],
    usage: "casino"
}
