const Router = require("express");
const messagesRouter = Router();
const { messages } = require("../models/messages");

messagesRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    res.render("message.ejs", { message: messages[id] })
    console.log(messages)
});

module.exports = messagesRouter;