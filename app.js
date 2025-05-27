const indexRouter = require("./routers/indexRouter");
const messagesRouter = require("./routers/messagesRouter");
const path = require("node:path");
const express = require("express");
const app = express();;
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/messages", messagesRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Server error");
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})





