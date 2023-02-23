import './AddShows.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import ShowCard from '../../Components/ShowCard/ShowCard'
import { useNavigate } from 'react-router-dom';


function AddShows ({user, refreshDiscover}) {

    const homeNav = useNavigate();

// Function for adding shows form
function addShowForm (e) {
// Form validation for empty fields
    e.preventDefault();
    if( !previewImage ||
        !e.target.artistText.value ||
        !e.target.dateText.value ||
        !e.target.venueText.value ||
        !e.target.addressText.value ||
        !e.target.doorsText.value ||
        !e.target.genreSelection.value ||
        !e.target.descriptionText.value
        ) {
            alert('Please fill in each field!')
        }else{
// Functionality to post a show
            addShow(
                uuidv4(),
                previewImage,
                e.target.artistText.value,
                e.target.dateText.value,
                e.target.venueText.value,
                e.target.addressText.value,
                e.target.doorsText.value,
                e.target.genreSelection.value,
                e.target.descriptionText.value
            );
// Emptys fields after submission
                e.target.artistText.value = '';
                e.target.dateText.value = '';
                e.target.venueText.value = '';
                e.target.addressText.value = '';
                e.target.doorsText.value = '';
                e.target.genreSelection.value = '';
                e.target.descriptionText.value = '';
// Toast success message (styling on App.jsx)
                toast.success('Show posted')
// Calling navigation to home and function to refresh discover(function found on app.jsx line 22)
                homeNav('/')
                refreshDiscover();
        }
}

// Function to add shows
function addShow (show_id, image, artistText, dateText, venueText, addressText,
                    doorsText, genreSelection, descriptionText) {
// New show object
    const newShow = {
        show_id: show_id,
        image: image,
        artist: artistText,
        date: dateText,
        venue: venueText,
        address: addressText,
        doors: doorsText,
        genre: genreSelection,
        description: descriptionText,
        users_id: user.users_id
    }
// Call to backend allows for show to be posted
    axios
    .post(`http://localhost:5050/shows/`, newShow)
    .then((res) => {

    }).catch((err) => console.log('LLL', err))
    }

// Image state variables
    const [imageSelected, setImageSelected] = useState('');
    const [previewImage, setPreviewImage] = useState();

// Function to upload image to Cloudinary
    const uploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'ib0asolr')
        formData.append('api_key', 252786561257121)
        formData.append('timestamp', Date.now())
// Axios call to cloudinary allowing upload of image
        axios
        .post('https://api.cloudinary.com/v1_1/do5k651qd/image/upload/', formData, {
        })
        .then((res) => {
// Set uploaded image as preview
            setPreviewImage(res.data.url)
        })
        .catch((err) => console.log(err))
    }

// Declare remaining preview state variables
    const [artistPreview, setArtistPreview] = useState();
    const [datePreview, setDatePreview] = useState();
    const [venuePreview, setVenuePreview] = useState();
    const [doorsPreview, setDoorsPreview] = useState();
    const [genrePreview, setGenrePreview] = useState();

    return(
    <>
    <h2 className='form__title'>Add a Show</h2>
    
    <div className='addShows__wrapper'>
        <div className='form__container'>
            
            {/* Form calls form function on submit */}
            <form className='form' action="" onSubmit={addShowForm}>
                <div className='form__cont'>
                    <div className='form__subCont'>

                        <label className='form__label' htmlFor="">Cover Photo</label>
                            
                            <div className='file__upload'>
                                {/* Input field for image sends data to Cloudinary */}
                                <div>
                                    <label className='file__upload--label' htmlFor="imageUploadID">Choose Image</label>
                                    <input id='imageUploadID' class='file__upload' type="file" name='image' onChange={(e) => {
                                        setImageSelected(e.target.files[0])
                                        }}/>
                                </div>
                                <div>
                                    <button className='file__upload--label' onClick={uploadImage}>Click to Upload</button>
                                </div>
                            </div>

                        {/* Remaining text inputs - some with onChange for live preview */}
                        <label className='form__label' htmlFor="">Artist</label>
                            <input className='form__input' type="text" placeholder='What is your artist name?' name='artistText' onChange={(e) => setArtistPreview(e.target.value)}/>
                        <label className='form__label' htmlFor="">Date</label>
                            <input className='form__input' type="text" placeholder='Which date are you playing?' name='dateText' onChange={(e) => setDatePreview(e.target.value)}/>
                        <label className='form__label' htmlFor="">Venue</label>
                            <input className='form__input' type="text" placeholder='What is the name of your venue?' name='venueText' onChange={(e) => setVenuePreview(e.target.value)}/>
                        <label className='form__label' htmlFor="">Address</label>
                            <input className='form__input' type="text" placeholder='What is the street address?' name='addressText' />
                    </div>

                    <div className='form__subCont'>
                        <label className='form__label' htmlFor="">Time</label>
                            <input className='form__input' type="text" placeholder='What time do the doors open?' name='doorsText' onChange={(e) => setDoorsPreview(e.target.value)}/>
                        <label className='form__label' htmlFor="">Choose a genre</label>
                        
                        {/* Radio inputs, all with onChange for live preview */}
                        <div className="radio-toolbar">

                            <input type="radio" id="HipHop" name="genreSelection" value="Hip Hop / R & B" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="HipHop">Hip Hop / R & B</label>

                            <input type="radio" id="Folk" name="genreSelection" value="Folk" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Folk">Folk</label>

                            <input type="radio" id="Rock" name="genreSelection" value="Rock" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Rock">Rock</label> 

                            <input type="radio" id="Rap" name="genreSelection" value="Rap" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Rap">Rap</label> 

                            <input type="radio" id="Acoustic" name="genreSelection" value="Acoustic" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Acoustic">Acoustic</label> 

                            <input type="radio" id="Electronic" name="genreSelection" value="Electronic" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Electronic">Electronic</label> 

                            <input type="radio" id="Country" name="genreSelection" value="Country" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Country">Country</label>

                            <input type="radio" id="Grunge" name="genreSelection" value="Grunge" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Grunge">Grunge</label> 

                            <input type="radio" id="Blues" name="genreSelection" value="Blues" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Blues">Blues</label> 

                            <input type="radio" id="Jazz" name="genreSelection" value="Jazz" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Jazz">Jazz</label> 

                            <input type="radio" id="Lo-Fi" name="genreSelection" value="Lo-Fi" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Lo-Fi">Lo-Fi</label> 

                            <input type="radio" id="Punk" name="genreSelection" value="Punk" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Punk">Punk</label> 

                            <input type="radio" id="Pop" name="genreSelection" value="Pop" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Pop">Pop</label> 

                            <input type="radio" id="Indie-Pop" name="genreSelection" value="Indie-Pop" onChange={(e) => setGenrePreview(e.target.value)}/>
                            <label htmlFor="Indie-Pop">Indie-Pop</label> 
                        </div>

                        <label className='form__label' htmlFor="">Description</label>
                            <textarea className='form__input form__textArea' type="text" placeholder='Describe your show/artist..' name='descriptionText' />
                        
                        <div className='form__button--container'>
                            <button className='form__button'>SUBMIT</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        {/* Live preview uses discover page show card with props from this page for values */}
        <ShowCard 
        image={previewImage}
        artist={artistPreview}
        date={datePreview}
        venue={venuePreview}
        doors={doorsPreview}
        genre={genrePreview}
            />
    </div>
    </>
    )
}

export default AddShows;