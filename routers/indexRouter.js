const { Router } = require("express");
const indexRouter = Router();
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

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini message board", messages: messages })
})

indexRouter.get("/new", (req, res) => {
    res.render("form")
})

indexRouter.post("/new", (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser || "Anonymous";
    
    messages.push({ text: messageText, user: messageUser, added:  new Date().toLocaleString('ru-RU', options).split(", ").reverse().join(", ") });
    
    res.redirect("/")
})

module.exports = indexRouter;