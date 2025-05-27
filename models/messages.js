const options = { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' };

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date().toLocaleString('ru-RU', options).split(", ").reverse().join(", "),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added:  new Date().toLocaleString('ru-RU', options).split(", ").reverse().join(", "),
    }
];

module.exports = { options, messages }