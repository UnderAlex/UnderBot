'use strict'

var TelegramBot = require('node-telegram-bot-api');

var TOKEN = '241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs';

var port = process.env.OPENSHIFT_NODEJS_PORT;
var host = process.env.OPENSHIFT_NODEJS_IP;
var domain = process.env.OPENSHIFT_APP_DNS;

var bot = new TelegramBot(TOKEN, {webHook: {port: port, host: host}});
// OpenShift enroutes :443 request to OPENSHIFT_NODEJS_PORT
bot.setWebHook(domain+':443/bot'+TOKEN);
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, "I'm alive!");
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