const { Events,VoiceState } = require('discord.js');

module.exports = {
	name: Events.VoiceStateUpdate,
	async execute(client) {
		console.log(`testa ai`);
	},
};