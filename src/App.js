import logo from '../src/sBidoof.png';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p></p>
      <p></p>
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>made by Solis</p>
        <p>
          Bidoof
        </p>
        <p>{Hello}</p>
        <Greet name="Peter" heroAlias="Spiderman">
          <Message/>
        </Greet>
        <Greet name="Tony" heroAlias="Iron man"/>
          <Button>OwO</Button>
        <Greet name="Thor" heroAlias="God of Thunder"/>
      </header>
    </div>
  );
}

export default App;
