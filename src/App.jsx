import logo from './logo.svg';
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Discover from './Pages/Discover/Discover';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Discover />
    </div>
  );
}

export default App;
