const express = require("express");
const path = require ("path");
const app = express();
const PORT = process.env.PORT || 3001;
const mainRouter = require("./routes/main.router");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);

//app.listen(PORT, () => console.log("Corriendo en 3001"))
app.listen(PORT, () => {
    console.log(`Server up and running on PORT ${PORT}`)});