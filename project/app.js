const express = require('express');

const app = express();
const prt = process.env.port || 3000;
app.get('/', (req, res) => {
    res.send(res.sendFile(`${__dirname}/public/index.html`))
})

app.get('/nav', (req, res) => {
    res.sendFile(`${__dirname}/public/orderNow.html`)
})

app.get('/nav/submit', (req, res) => {
    res.send(req.query)

})



app.listen(prt, () => {
    console.log("Server Connected")
})