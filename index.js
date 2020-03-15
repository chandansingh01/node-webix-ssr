const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const User = require('./modules/user');


app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use('/', express.static('public'))


User(app);

app.listen(config.port,()=>{
console.log(`APP is running on PORT:: ${config.port}`);

})