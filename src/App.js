import Nav from "./Components/Nav";
import Genre from "./Components/Genre";
import './App.css';

function App() {
  return (
    <div className="App">
    <Nav />
    <div>
      <img src="https://media.istockphoto.com/vectors/book-festival-concept-vector-flat-style-design-illustration-vector-id1214281726?b=1&k=6&m=1214281726&s=170667a&w=0&h=P3M6fmLRaMZ9NztF_Io7YaAzHC4jF8BSUE1SOLE14wc=" />
      <div id="container">
        <Genre />
      </div>
    </div>

    <footer>
      <h4>Made with love</h4>
    </footer>
    </div>
  );
}

export default App;
