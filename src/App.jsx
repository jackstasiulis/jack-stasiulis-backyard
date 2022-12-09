// import logo from './logo.svg';
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Discover from './Pages/Discover/Discover';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddShows from './Pages/AddShows/AddShows';
import ShowPage from './Pages/ShowPage/ShowPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'


function App() {

  const [allShows, setAllShows] = useState([])

// Function to get all shows for the discover page
    function getShows () {
        axios
        .get(`http://localhost:5050/shows/`)
        .then(response => {
            setAllShows(response.data)
        })
        .catch((err) => console.log(err));
    }
    useEffect(() => {
        getShows();
    },[])


  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <Toaster 
        position='top-left'
        toastOptions={{
          icon:'∆',
          style: {
            background: '#262626',
            color: '#AA0000',
            fontWeight: '700'
          }}}
         />
          <Routes>

              <Route path='/' element={<Discover allShows={allShows} />} />
              <Route path='/shows/:showId' element={<ShowPage />} />
              <Route path='/addshows' element={<AddShows />} />
          </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
