'use strict'

const Telegram = require('node-telegram-bot-api')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('YOUR_TOKEN')

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
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