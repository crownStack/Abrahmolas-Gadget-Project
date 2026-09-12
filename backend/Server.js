const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Express backend!");
    console.log("page is working");
});

app.get('/api/home', (req, res) => {
    res.json({
        message: "Hello from the /api/home endpoint!"
    });
    console.log("page is working");
});

app.get('/api/signIn', (req, res) => {
    console.log("signin page is working");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})