module.exports.execute = async (client, message, args) => {
  
  let kazanilacak = [10, 20, 30]
  let amount = Math.floor(Math.random() * 50) + 10;

  let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
     return message.reply(`Yaşasın! Casinoda, **${beg.amount}** 💸 kazandın. Şuanki paran: **${beg.after}** 💸.`);
};

module.exports.help = {
    name: "casino",
    aliases: ["casino"],
    usage: "casino"
}
