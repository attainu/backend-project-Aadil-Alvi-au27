const express = require('express');

const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send("home working")
})

app.get('/nav', (req, res) => {
    res.sendFile(`${__dirname}/public/nav.html`)
})

app.get('/nav/submit', (req, res) => {
    res.send(req.query)

})



app.listen(port, () => {
    console.log("Server Connected")
})