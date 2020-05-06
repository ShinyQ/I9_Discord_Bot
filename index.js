const Discord = require('discord.js')
const { prefix, token } = require('./config.json')

const client = new Discord.Client()

client.once('ready', () =>{
    console.log('Running')
})

client.on('message', async message => {
    if(message.content.startsWith(`${prefix} kick`)){
        if(message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])){
            let member = message.mentions.members.first()
            member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " telah di banned!")
            })
        } else {
            message.channel.send("Member bngst jangan nglunjak :rage: ")
        }
    }

    if (message.content.startsWith(`ping`)) { 
        const req = await message.channel.send('Pinging... :bar_chart:');
        var ping = req.createdTimestamp - message.createdTimestamp - Math.round(client.ws.ping)
        
        if(ping < 0)
            ping *= -1 
        
        let msg = ''
        if (ping > 0 && ping < 50) 
            msg = `Nasa Speed :rocket:`
        else if (ping > 50 && ping < 100) 
            msg = `Wajar Lah :thumbsup:`
        else if (ping > 100 && ping < 150) 
            msg = `Ngeleg cok :firecracker:`
        else if(ping > 150 && ping < 200)
            msg = `Ampas cok ping-mu :poop:`   
        else
            msg = `Pindah kota aja cok :monkey_face:`

        req.edit(`${msg} ${ping}ms.`)
    }

})

client.login(token)