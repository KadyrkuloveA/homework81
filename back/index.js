const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nanoid = require('nanoid');

const Link = require('./models/Link');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost/shorten', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.get('/:shortUrl', async (req, res) => {
        const item = await Link.find({
            "shortUrl": req.params.shortUrl
        });

        const itemElement = item[0];
        if (!itemElement) {
            return res.status(404).send({message: 'Not Link found'});
        }

        res.status(301).redirect(itemElement.originalUrl)
    });

    app.post('/links', async (req, res) => {
        const linkContent = req.body;
        linkContent.shortUrl = nanoid(7);

        const link = new Link(linkContent);

        try {
            await link.save();
            return res.send({link: link.shortUrl});
        } catch (e) {
            return res.status(400).send(e);
        }
    });

    app.listen(port, () => {
        console.log(`HTTP Server live on http://localhost:${port}/`);
    });
};

run().catch(e => {
    console.error(e);
});