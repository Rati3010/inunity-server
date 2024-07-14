import express from 'express';
import axios  from 'axios';
import cors from 'cors';

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/proxy', async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).send('URL is required');
    }

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});