const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.get('/api/data', async (req, res) => {
    try {
      const request = await axios.get(`https://api.waqi.info/feed/seoul/?token=${keys.aqicnToken}`);
      const { data } = request;
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};