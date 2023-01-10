const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
})

const PokemonModel = mongoose.model("pokemons", PokemonSchema);
module.exports = PokemonModel;