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
import SignUp from './Pages/SignUp/SignUp';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
import About from './Pages/About/About';


function App() {

const navigate = useNavigate();

// Function to refresh discover on page load after adding a show
const refreshDiscover = () => {
  window.location.reload('/');
}

// Function to register a user!
const handleSignUp = (e) => {
  e.preventDefault();
  if(
        !e.target.email.value ||
        !e.target.username.value ||
        !e.target.password.value
        ) {
            toast.success('Please fill in each field')
        } else {
  axios
  .post('http://localhost:5050/signup', {
    // uses email, username, and pass to sign up
    email: e.target.email.value,
    username: e.target.username.value,
    password: e.target.password.value
  })
  .then((res) => {
    // if our jwt token was generated properly, load the profile with its data
    if(res.data.token) {
      loadProfile(res.data.token);
      localStorage.setItem('jwt_token', res.data.token);
    }
  })
  .then(() => {
    navigate('/signin')
  })
  .catch((err) => {
    console.log(err);
    toast.success('Create account unsuccessful')
  });
}
};


// state variables for our sign in
const [signedIn, setSignedIn] = useState(false);

const [user, setUser] = useState({});
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
      setUser(res.data)
      console.log(res.data)
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
  if(
    !e.target.username.value ||
    !e.target.password.value
    ) {
        toast.success('Please fill in each field')
    } else {

  axios
    .post('http://localhost:5050/signin', {
      username: e.target.username.value,
      password: e.target.password.value,
    })
    .then((res) => {
      if(res.data.token) {
        loadProfile(res.data.token);
        localStorage.setItem('jwt_token', res.data.token);
        toast.success('Signed in successfully')
      }
    })

    .then((res) => {
      navigate('/')
    })

    .catch((err) => {
      toast.success('Wrong username or password')
      console.log(err);
    })
  }
};


// Function to sign a user out
const handleSignOut = () => {
  setSignedIn(false);
  setUser(null);
  localStorage.removeItem('jwt_token');
  navigate('/')
  window.location.reload();
};


  const [allShows, setAllShows] = useState([])

// Function to get all shows for the discover page
    const getShows = () => {
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
  //BrowserRouter moved to index.js

      <main className="App">
        <Navbar signedIn={signedIn} handleSignOut={handleSignOut} username={user?.username}/>
        <Toaster 
        position='bottom-left'
        toastOptions={{
          icon:'∆',
          style: {
            background: '#AA0000',
            color: '#F5F5F5',
            fontWeight: '700'
          }}}
         />
          <Routes>

              <Route path='/' element={<Discover allShows={allShows} getShows={getShows} user={user} />} />
              <Route path='/shows/:showId' element={<ShowPage user={user} />} />
              <Route path='/addshows' element={<AddShows user={user} refreshDiscover={refreshDiscover} />} />
              <Route path='/artists' element={<UnderConstruction />} />
              <Route path='/venues' element={<UnderConstruction />} />


              <Route path='/profile' element={<UnderConstruction />} />
              <Route path='/about' element={<About />} />
          
              <Route path='/signup' element={<SignUp handleSignUp={handleSignUp} />} />
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
