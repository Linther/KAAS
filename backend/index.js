const express = require('express');

const app = express();
const axios = require('axios')

app.get('/getQuote', (req, res) => {
    axios
  .get('https://api.kanye.rest')
  .then(response => {
    console.log(`statusCode: ${response.status}`)
    console.log("quote received from kanye api: " + response.data.quote)
    res.json(response.data)
  })
  .catch(error => {
    console.error(error)
  })
});

app.listen(3001, () => console.log('Example app is listening on port 3001'));