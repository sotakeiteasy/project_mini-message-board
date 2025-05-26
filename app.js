const indexRouter = require("./routers/indexRouter")
const path = require("node:path")
const express = require("express")
const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.get("/", indexRouter)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`)
})





