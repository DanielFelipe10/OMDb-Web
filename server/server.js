const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 4040;

app.get('/search', async(req, res)=>{
    try{
        const searchTerm = req.query.q;
        const apiKey = "2bcf3f8"
        const url = `http://www.omdbapi.com/?i=${searchTerm}&apikey=${apiKey}`; 
        const response = await axios.get(url);
        const movies = response.data.Search;
        res.json(movies); 
    }catch(error){
        console.error("Error al obtener los datos de la API:", error);
        res.status(500).send("Error al obtener datos de la API");
    }
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});