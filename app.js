const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));