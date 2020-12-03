const Discord = require("discord.js");
 const client = new Discord.Client({ disableMentions: 'everyone' });
const Eco = require("quick.eco");
client.eco = new Eco.Manager(); // quick.eco
client.db = Eco.db; // quick.db
client.ayar = require("./ayarlar.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.shop = { //market öğeleri buraya, cost ise ne kadar para ettiği
  bilgisayar: {
    cost: 2000
  },
  telefon: {
    cost: 1000
  },
  abone: {
    cost: 3000
  },
  minecraft: {
    cost: 25000
  },
  pythonic: {
    cost: 10000
  },
    iphone12: {
    cost: 1000
  }
};
const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        const event = require(`./events/${f}`);
        let eventName = f.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir("./komutlar/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(f => {
        if (!f.endsWith(".js")) return;
        let command = require(`./komutlar/${f}`);
        client.commands.set(command.help.name, command);
        command.help.aliases.forEach(alias => {
            client.aliases.set(alias, command.help.name);
        });
    });
});


client.login(client.ayar.token);
