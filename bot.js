const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("523130993234804740")
setInterval(function() {
channel.send(`** spaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam **`);
}, 30)
})

client.login("NTIzMTI4MTM3NDY3NDI4ODY1.DvVBBg.kLwbq0X0brl0IcqzhjOpwBGX57E");
