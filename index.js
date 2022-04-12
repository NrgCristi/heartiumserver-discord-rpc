const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: '',
        state: '',
        startTimestamp: '',
        largeImageKey: '',
        largeImageText: '',
        smallImageKey: '',
        smallImageText: '',
        buttons: [{
            label: 'Discord'
            url: 'https://discord.gg/9Uc7EbUztv'
        }, {
            label: 'Youtube Channel'
            url: 'https://youtube.com/channel/UCkhTX4pP3JdvS4IPaC-ExiQ'
        }]
    })
})