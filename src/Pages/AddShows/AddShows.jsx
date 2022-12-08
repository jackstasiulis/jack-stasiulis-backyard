import './AddShows.scss';
import axios from 'axios';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import ShowCard from '../../Components/ShowCard/ShowCard'
import CloudinaryUploadWidget from "../../Components/CloudinaryUploadWidget/CloudinaryUploadWidget";


function AddShows () {


function addShowForm (e) {
    e.preventDefault();
    if( !e.target.image.value ||
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
            addShow(
                uuidv4(),
                e.target.image.value,
                e.target.artistText.value,
                e.target.dateText.value,
                e.target.venueText.value,
                e.target.addressText.value,
                e.target.doorsText.value,
                e.target.genreSelection.value,
                e.target.descriptionText.value
            );
                e.target.image.value = '';
                e.target.artistText.value = '';
                
                e.target.dateText.value = '';
                e.target.venueText.value = '';
                e.target.addressText.value = '';
                e.target.doorsText.value = '';
                e.target.genreSelection.value = '';
                e.target.descriptionText.value = '';

                toast.success('Show posted')
        }
}

function addShow (show_id, image, artistText, dateText, venueText, addressText,
                    doorsText, genreSelection, descriptionText) {

    const newShow = {
        show_id: show_id,
        image: image,
        artist: artistText,
        date: dateText,
        venue: venueText,
        address: addressText,
        doors: doorsText,
        genre: genreSelection,
        description: descriptionText
    }
    console.log(newShow)
    axios
    .post(`http://localhost:5050/shows/`, newShow)
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => console.log('LLL', err))
    }


    const [imageSelected, setImageSelected] = useState('');
    const [previewImage, setPreviewImage] = useState();

    const uploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'ib0asolr')
        formData.append('api_key', 252786561257121)
        formData.append('timestamp', Date.now())
        axios
        .post('https://api.cloudinary.com/v1_1/do5k651qd/image/upload/', formData, {
            // headers: {
            //     "Content-Type": 'multipart/form-data; boundary=<calculated when request is sent>'
            // },
           
        })
        
        .then((res) => {
            console.log(res.data.url)
            setPreviewImage(res.data.url)
        }).catch((err) => console.log(err))
    }

    const [artistPreview, setArtistPreview] = useState();
    const [datePreview, setDatePreview] = useState();
    



    return(

        <>

            <h2 className='form__title'>Add a Show</h2>


            

            
                <div className='addShows__wrapper'>
                    <div className='form__container'>
                        
                        <form className='form' action="" onSubmit={addShowForm}>
                            <div className='form__cont'>
                                <div className='form__subCont'>

                                    
                                    {/* {previewImage && <img src={previewImage} alt="" />} */}




                                    <label className='form__label' htmlFor="">Cover Photo</label>
                                        {/* <input className='form__input' type="text" placeholder='Upload your cover photo' name='image'/> */}
                                      
                                        <div>
                                            <input type="file" name='image' onChange={(e) => {
                                                console.log(e.target.files[0]);
                                                setImageSelected(e.target.files[0])
                                                }}/>
                                        </div>
                                        <div>
                                            <button className='form__button' onClick={uploadImage}>upload here</button>
                                        </div>



                                    <label className='form__label' htmlFor="">Artist</label>
                                        <input className='form__input' type="text" placeholder='What is your artist name?' name='artistText' onChange={(e) => setArtistPreview(e.target.value)}/>
                                    <label className='form__label' htmlFor="">Date</label>
                                        <input className='form__input' type="text" placeholder='Which date are you playing?' name='dateText' />
                                    <label className='form__label' htmlFor="">Venue</label>
                                        <input className='form__input' type="text" placeholder='What is the name of your venue?' name='venueText' />
                                    <label className='form__label' htmlFor="">Address</label>
                                        <input className='form__input' type="text" placeholder='What is the street address?' name='addressText' />
                                </div>

                                <div className='form__subCont'>
                                    <label className='form__label' htmlFor="">Time</label>
                                        <input className='form__input' type="text" placeholder='What time do the doors open?' name='doorsText' />
                                    <label className='form__label' htmlFor="">Choose a genre</label>
                                    
                                    <div className="radio-toolbar">
                                        <input type="radio" id="HipHop" name="genreSelection" value="Hip Hop / R & B"/>
                                        <label htmlFor="HipHop">Hip Hop / R & B</label>

                                        <input type="radio" id="Folk" name="genreSelection" value="Folk"/>
                                        <label htmlFor="Folk">Folk</label>

                                        <input type="radio" id="Rock" name="genreSelection" value="Rock"/>
                                        <label htmlFor="Rock">Rock</label> 

                                        <input type="radio" id="Rap" name="genreSelection" value="Rap"/>
                                        <label htmlFor="Rap">Rap</label> 

                                        <input type="radio" id="Acoustic" name="genreSelection" value="Acoustic"/>
                                        <label htmlFor="Acoustic">Acoustic</label> 

                                        <input type="radio" id="Electronic" name="genreSelection" value="Electronic"/>
                                        <label htmlFor="Electronic">Electronic</label> 

                                        <input type="radio" id="Country" name="genreSelection" value="Country"/>
                                        <label htmlFor="Country">Country</label>

                                        <input type="radio" id="Grunge" name="genreSelection" value="Grunge"/>
                                        <label htmlFor="Grunge">Grunge</label> 

                                        <input type="radio" id="Blues" name="genreSelection" value="Blues"/>
                                        <label htmlFor="Blues">Blues</label> 

                                        <input type="radio" id="Jazz" name="genreSelection" value="Jazz"/>
                                        <label htmlFor="Jazz">Jazz</label> 

                                        <input type="radio" id="Lo-Fi" name="genreSelection" value="Lo-Fi"/>
                                        <label htmlFor="Lo-Fi">Lo-Fi</label> 

                                        <input type="radio" id="Punk" name="genreSelection" value="Punk"/>
                                        <label htmlFor="Punk">Punk</label> 

                                        <input type="radio" id="Pop" name="genreSelection" value="Pop"/>
                                        <label htmlFor="Pop">Pop</label> 

                                        <input type="radio" id="Indie-Pop" name="genreSelection" value="Indie-Pop"/>
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

                <ShowCard 
                image={previewImage}
                artist={artistPreview} />
            </div>
        </>
        
        
    )
}

export default AddShows;