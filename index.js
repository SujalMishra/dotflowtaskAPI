const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/news', async (req, res) => {
    const {searchQuery} = req.body;
    const API_KEY = "147288a8becf4488a4a05fe63341b2d6";
    const resp = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=20&apiKey=${API_KEY}`);
    console.log(resp.data.articles);
    res.json(resp.data.articles);
    
});

app.post("/newscriteria", async (req, res) => {
    const {searchQuery,criteria} = req.body;
    const API_KEY = "147288a8becf4488a4a05fe63341b2d6";
    const resp = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${criteria}&pageSize=20&apiKey=${API_KEY}`);
    console.log(resp.data.articles);
    res.json(resp.data.articles);
});

app.post("/newsdate", async (req, res) => {
    const {searchQuery,startDate,endDate} = req.body;
    const API_KEY = "147288a8becf4488a4a05fe63341b2d6";
    const resp = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=${startDate}&pageSize=20&to=${endDate}&sortBy=popularity&apiKey=${API_KEY}`);
    console.log(resp.data.articles);
    res.json(resp.data.articles);
});

app.post("/reddit", async (req, res) => {
    const {keyword} = req.body;
    const resp = await axios.get(`https://www.reddit.com/r/all/search.json?q=${keyword}`);
    console.log(resp.data.data.children);
    res.json(resp.data.data.children);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
