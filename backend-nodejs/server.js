const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.listen(PORT, () => {
    console.log('Running server on port ${PORT}...');
})