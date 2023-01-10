const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PokemonModel = require("./models/Pokemons")
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Kaisen:csis3380@pokemondb.ntuy9ik.mongodb.net/PokemonDB?retryWrites=true&w=majority");


app.get("/getPokemons", (req, res)=> {
    PokemonModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server runs on port 3001!");
}) 