import "../App.css";
import Card from "./Card";
import Header from "./Header";
import Search from "./Search";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [keyword, setKeyword] = useState("");

  function addKeyword(text) {
    setKeyword(text);
  }

  function addItems() {
    let index = 0;
    do {
      index = Math.floor(Math.random() * 10000);
    } while (pokemons.map((pokemon) => pokemon.id).includes(index));

    Axios.get("http://localhost:3001/getPokemons").then((response) => {
      let randomIndex = Math.floor(Math.random() * 1000);
      fetch(response.data[randomIndex].url)
        .then((res) => res.json())
        .then((data) => {
          setPokemons([...pokemons, data]);
        });
    });
  }

  function deleteItems(id) {
    setPokemons((prevValue) => {
      return prevValue.filter((item) => {
        return item.id !== id;
      });
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getPokemons").then((response) => {
      for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 1000);
        fetch(response.data[randomIndex].url)
          .then((res) => res.json())
          .then((data) => {
            setPokemons((prevEvents) => [...prevEvents, data]);
          });
      }
    });
  }, []);

  return (
    <div className="App">
      <Header title="Pokemon" />
      <h2>Characters</h2>
      <Search onSetKey={addKeyword} />
      <button
        onClick={() => {
          addItems();
        }}
      >
        Add Card
      </button>
      <div className="row">
        {pokemons.filter(i => !keyword || i.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0)
          .map((pokemon) => {
            let abilitiesString = "";
            for (let i = 0; i < pokemon.abilities.length; i++) {
              abilitiesString +=
                pokemon.abilities[i].ability.name.charAt(0).toUpperCase() +
                pokemon.abilities[i].ability.name.slice(1) +
                ", ";
              abilitiesString = abilitiesString.replace("-", " ");
            }
            return (
              <Card
                key={pokemon.id.toString()}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites.front_default}
                abilities={abilitiesString}
                onDelete={deleteItems}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;