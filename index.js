import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const API_URL = 'https://api.agify.io?name=';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.render('index.ejs', { age: null });
});

app.post('/', async (req, res) => {
  try {
    const name = req.body['nameInput'];
    const result = await axios.get(API_URL + name);
    res.render('index.ejs', { age: result.data.age });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
