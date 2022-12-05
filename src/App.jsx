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


function App() {

  const [allShows, setAllShows] = useState([])

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

    
    // const [showData, setShowData] = useState();
    // const { showId } = useParams();

    // function getSingleShow () {
    //   axios
    //   .get(`http://localhost:5050/shows/${showId}`)
    //   // console.log(showId)
    //   .then((res) => {
    //       setShowData(res.data[0]);
    //       console.log(res.data)
    //   })
    //   .catch((err) => {
    //       console.log(err);
    //   });
    // };
    
    // useEffect(() => {
    //     getSingleShow();
    // }, []);

  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
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
