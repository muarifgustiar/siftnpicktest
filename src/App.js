import './App.css';
import SearchInput from './components/SearchInput';
import CatList from './components/CatList';
function App() {
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        Cat Apps
      </header>
      <main>
        <SearchInput data-testid="search-input"></SearchInput>
        <SortInput sortBy=""></SortInput>
        <CatList cat={cat}></CatList>
      </main>
    </div>
  );
}


export default App;
