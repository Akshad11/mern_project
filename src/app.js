const express = require("express")

require("../src/conn")
const router = require("./routers/men");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);




// app.get("/", async (req, res) => {
//     res.send("Hello From the Akshad")
// })

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
}) 