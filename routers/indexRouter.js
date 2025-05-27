const { Router } = require("express");
const indexRouter = Router();
const { messages, options } = require("../models/messages");

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