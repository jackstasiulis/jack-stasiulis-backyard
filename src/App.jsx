// import logo from './logo.svg';
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Discover from './Pages/Discover/Discover';
import { BrowserRouter, Routes, Route, useParams, Navigate, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import AddShows from './Pages/AddShows/AddShows';
import ShowPage from './Pages/ShowPage/ShowPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
import SignIn from './Pages/SignIn/SignIn';


function App() {
const navigate = useNavigate();


// state variables for our sign in
const [signedIn, setSignedIn] = useState(false);
const [user, setUser] = useState(null);
// Mounts component / checks if local storage has the JWT token
// If token exists verify the JWT and sign in the user!
useEffect(() => {
  const jwtToken = localStorage.getItem('jwt_token')
// If JWT token exists, load the user profile (object)
  if (jwtToken) { 
    loadProfile(jwtToken);
  }
}, []);

// Function to get our user data.
// sends the JWT token in the request headers
// server decodes token in the at the verify endpoint
const loadProfile = (jwtToken) => {
  axios
    .get('http://localhost:5050/verify', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then((res) => {
      setSignedIn(true);
      setUser(res.data.user)
    })
    .catch((err) => {
      console.log(err);
    });
};

// Function for the actual sign in
// posts username and password to the server
// returns JWT if successful
const handleSignIn = (e) => {
  e.preventDefault();
  axios
    .post('http://localhost:5050/signin', {
      username: e.target.username.value,
      password: e.target.password.value,
    })
    .then((res) => {
      if(res.data.token) {
        loadProfile(res.data.token);
        localStorage.setItem('jwt_token', res.data.token);
        console.log('WOW YES')
        navigate('/')
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// Function to sign a user out
const handleSignOut = () => {
  setSignedIn(false);
  setUser(null);
  localStorage.removeItem('jwt_token');
};




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
  // moved BrowserRouter to index.js

      <main className="App">
        <Navbar signedIn={signedIn} handleSignOut={handleSignOut} user={user} />
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

              <Route path='/' element={<Discover allShows={allShows}/>} />
              <Route path='/shows/:showId' element={<ShowPage />} />
              <Route path='/addshows' element={<AddShows />} />
              <Route path='/signin' element={<SignIn
                                                signedIn={signedIn}
                                                user={user}
                                                handleSignIn={handleSignIn}
                                                // username={username.value}
                                                />} />
          </Routes>
        <Footer />
      </main>
  );
}

export default App;
