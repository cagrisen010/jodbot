module.exports.execute = async (client, message, args) => {
  
  let kazanilacak = [10, 20, 30]
    let amount = Math.floor(Math.random() * kazanilacak.lenght)
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: false });
     return message.reply(`Yaşasın! Casinoda, **${beg.amount}** 💸 kazandın. Şuanki paran: **${beg.after}** 💸.`);
};

module.exports.help = {
    name: "casino",
    aliases: ["casino"],
    usage: "casino"
}
