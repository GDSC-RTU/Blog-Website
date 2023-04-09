const express = require('express');
const path = require('path');
const cors = require('cors');
const { PORT } = require('./config/serverConfig');
const connect = require('./config/database');


const app = express();

app.use(express.static(path.resolve(__dirname, '../frontend/build')));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello World!');
});

app.listen(PORT, async () => {
    console.log(`Server started on http://localhost:${PORT}`);
    await connect();
    console.log('DB Connected');
});
