const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Using Heartium',
        state: 'Heartium',
        startTimestamp: '00:00',
        largeImageKey: '',
        largeImageText: '',
        smallImageKey: '',
        smallImageText: '',
        buttons: [{
            label: 'Discord'
            url: 'https://discord.gg/9Uc7EbUztv'
        }, {
            label: 'Github'
            url: 'https://github.com/CristianCosticea'
        }]
    })
})
