// import logo from './logo.svg';
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Discover from './Pages/Discover/Discover';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddShows from './Pages/AddShows/AddShows';

function App() {

  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <Routes>

            <Route path='/' element={<Discover />} />
            <Route path='/addshows' element={<AddShows />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>



  );
}

export default App;
