
const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) =>{
    res.send("hello world from ken!");
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});
