const { Events } = require('discord.js');

module.exports = {
	name: Events.VoiceStateUpdate,
	once: false,
	execute(client) {
		console.log(`testa ai`);
	},
};