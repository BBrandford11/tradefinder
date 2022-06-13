import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const name = "Trade Finder"
  return (
    <div className="App">
      <Header name={name}/>
      <Nav name={name}/>
      <Body name={name}/>
    </div>
  );
}

export default App;
