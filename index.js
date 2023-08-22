import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const API_URL = '';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
