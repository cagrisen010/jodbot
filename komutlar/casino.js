exports.execute = async (client, message, args) => {


  let amount = args[0]
let chance = Math.floor(Math.random() * 2)
if(chance === 1) {
message.reply(`You won`)
        let beg = await client.eco.beg(client.ecoAddUser, -2000, { canLose: true, cooldown: 12000, customName: "search" });
} else {
message.reply(`You lost`)
}
  let winCash = parseInt(amount) * 2 //Y o u r c h o i c e

        let beg = await client.eco.beg(client.ecoAddUser, winCash, { canLose: true, cooldown: 12000, customName: "search" });

  };
  
exports.help = {
    name: "casino",
    aliases: ['casino'],
    usage: "casino"
}