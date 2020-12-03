exports.execute = async (client, message, args) => {
  
  let kazan = [
    "win",
    "lose"
  ]
var sonuc = kazan[Math.floor(Math.random() * kazan.length)];
  
  if (sonuc = "win") {
      client.eco.removeMoney(message.author.id, (Math.random() * 200) - 50)
  }
    else (sonuc = "lose") {
      
    } 
    
   
  
  let users = [
        "Cüzdan",
        "Ekmek",
        "Air pod",
        "Kedi",
      "ocak",
      "Buz Dolabı",
      "Pythonic"
    ];
  let buy = client.eco.removeMoney(message.author.id, (Math.random() * 200) - 50)
    let amount = Math.floor(Math.random() * 200) + 50;
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: true, cooldown: 12000, customName: "search" });
    if (beg.onCooldown) return message.reply(`Bu kadarda beleşçi olunmaz, ${beg.time.minutes} dakika ve ${beg.time.seconds} saniye sonra geri gel.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}:** Yakalandığın için para kazanamadın`);
    else return message.reply(`yerde bulduğun **${users[Math.floor(Math.random() * users.length)]}** Sana biraz para kazandırdı **${beg.amount}** 💸.`);
};

exports.help = {
    name: "casino",
    aliases: ['casino'],
    usage: "ara"
}