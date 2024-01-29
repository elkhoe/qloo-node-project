require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const app = express();
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;

let data = []; 

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/teams',
  params: {page: '0'},
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

// fetch-data endpoint
app.get('/fetch-data', async (req, res) => {
    try {
        const response = await axios.request(options);
        data = response.data.data;
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// process-data endpoint
app.get('/process-data', (req, res) => {
    try {
        // Organize teams by division
        const teamsByDivision = data.reduce((acc, team) => {
            acc[team.division] = acc[team.division] || [];
            acc[team.division].push(team);
            return acc;
        }, {});
        
        res.json(teamsByDivision);
    } catch (error) {
        res.status(500).send('Error processing data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
