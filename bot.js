require('dotenv').config();

const Discord = require('discord.js');

const client = new Discord.Client();
const token = process.env.BOT_TOKEN;

const channel_id = '798996412951691294';

client.login(token)

client.on('ready', () => {
    console.log('Authentication Successful!')
})

client.on('message', (message) => {
    if (message.channel.id === channel_id)
    {
        console.log(message.content)
        message.channel.send('A message has been posted.')
    }
})