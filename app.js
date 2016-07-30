'use strict'

var TelegramBot = require('node-telegram-bot-api');

var TOKEN = '241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs';
var USER = 'USER_ID';

var bot = new TelegramBot(TOKEN, {polling: {timeout: 1, interval: 100}});

var opts = {
	reply_murkup: JSON.stringify(
		{
			force_reply: true
		}
	)};

bot.sendMessage(USER,  'How old r u?', opts)
	.then(function (sended) {
		var chatId = sended.chat.id;
		var messageId = sended.message_id;
		bot.onReplyToMessage(chatId, messageId, function (message) {
			console.log('User is %s years old', message.text);
		});
	});
/**

const Telegram = require('node-telegram-bot-api')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs')

class PingController extends TelegramBaseController {

    pingHandler($) {
        $.sendMessage('pong')
    }

    get routes() {
        return {
            'ping': 'pingHandler'
        }
    }
}

tg.router
    .when(['ping'], new PingController())
**/