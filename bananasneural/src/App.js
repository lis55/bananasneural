import logo from './logo.svg';
import './App.css';
import FileInput from './components/FileInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Upload a video
        </p>
        <FileInput/>
      </header>
    </div>
  );
}

export default App;
