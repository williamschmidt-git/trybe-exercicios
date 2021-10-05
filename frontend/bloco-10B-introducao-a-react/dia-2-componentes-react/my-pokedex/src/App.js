import './App.css';
import PokemonCard from './PokemonCard'
import Pokemon from './Pokemon';

function App() {
  return <div className="Pokedex">
    <Pokemon />
    <PokemonCard />
  </div>;
}

export default App;
