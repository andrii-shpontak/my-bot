const TelegramApi = require('node-telegram-bot-api');

const botToken = '6749004783:AAG6p68xFEV2PT8qDYqBkezow_Zp6iDX8SI';

const bot = new TelegramApi(botToken, { polling: true });

bot.setMyCommands([
  {
    command: '/start',
    description: 'Opening greeting',
  },
]);

bot.on('message', async (msg) => {
  const text = msg.text;
  const id = msg.chat.id;

  if (text === '/start') {
    await bot.sendSticker(id, 'https://media.stickerswiki.app/ptkdev/1069259.512.webp');
    return bot.sendMessage(id, `Welcome, ${msg.from.first_name}\nHow can i help you today?`);
  }
  return bot.sendMessage(id, `I'm a young bot and just learning\nYou wrote me this:\n${text}`);
});
