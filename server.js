const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// PostgreSQL Client Setup
const client = new Client({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

app.get('/api', (req, res) => {
    res.send('API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});