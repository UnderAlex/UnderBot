/** 		Y241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs 		**/

'use strict'

var TelegramBot = require('node-telegram-bot-api');


var token = 'Y241137685:AAGz5moUy-Wy7fooqRLUffjs7osFozpJ3zs';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id;
  var shuffled = match[1].split('').sort(function(){return 0.5-Math.random()}).join('');
  bot.sendMessage(fromId, shuffled);
});

// Any kind of message
bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  // photo can be: a file path, a stream or a Telegram file_id
  var photo = 'cats.png';
  bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});