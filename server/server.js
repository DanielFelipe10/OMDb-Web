const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

const PORT = 4000;

app.use(express.static(path.join(__dirname, "../public")));

app.get('/search', async(req, res)=>{
    try{
        const searchTerm = req.query.s;
        const apiKey = "2bcf3f8"
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`; 
        const response = await axios.get(url);
        const movies = response.data.Search;
        res.json(movies); 
        console.log("Exito")
    }catch(error){
        console.error("Error al obtener los datos de la API:", error);
        res.status(500).send("Error al obtener datos de la API");
    }
});

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});