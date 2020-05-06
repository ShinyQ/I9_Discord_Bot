const Discord = require('discord.js')
const { prefix, token } = require('./config.json')

const client = new Discord.Client()

client.once('ready', () =>{
    console.log('Running')
})

client.on('message', async message => {
    // console.log(message.content)
    if(message.content.startsWith(`${prefix} kick`)){
        let member = message.mentions.members.first()
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " telah di banned!")
        })
    }

    if (message.content.startsWith(`ping`)) { 
        const m = await message.channel.send('Pinging... :bar_chart:');
        message.channel.send(`Pong! Ping Kamu ${m.createdTimestamp - message.createdTimestamp - Math.round(client.ws.ping)}ms.`)
    }
})

client.login(token)