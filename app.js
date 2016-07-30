'use strict'

const Telegram = require('node-telegram-bot-api')
const TelegramBaseController = Telegram.TelegramBaseController
const tg = new Telegram.Telegram('241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs')

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