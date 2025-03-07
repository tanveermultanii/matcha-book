const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('MatchaBook backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});