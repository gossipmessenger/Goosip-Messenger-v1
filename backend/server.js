require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chats = require('./data/data');

const app = express();
const PORT = process.env.PORT || 5000
app.use(cors())

app.get('/', (req,res) => {
    res.send('API is running')
});

app.get('/api/chat', (req,res) => {
    res.send(chats)
});
app.get('/api/chat/:id', (req,res) => {
    const singleChat = req.params.id
    const ch = chats.find(chat => {
        return chat._id === singleChat
    })
    res.send(ch)
});

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});