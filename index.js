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
    await bot.sendSticker(
      id,
      'https://tlgrm.ru/_/stickers/6a3/497/6a34971d-6648-37c2-8f2b-8940f65ba906/5.jpg',
    );
    return bot.sendMessage(id, `Welcome, ${msg.from.first_name}`);
  }
  return bot.sendMessage(id, `You wrote me this:\n${text.toUpperCase()}`);
});
