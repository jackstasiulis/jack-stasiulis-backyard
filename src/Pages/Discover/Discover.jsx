import './Discover.scss';
import axios from 'axios';
import ShowCard from '../../Components/ShowCard/ShowCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';
import seeingStrangers from '../../assets/seeingStrangers.png'

// import seeingStrangers from 


function Discover (props) {

// Image URLs for the discover carousel
const slides = [
    {url: 'https://placekitten.com/501/280'},
    {url: 'https://placekitten.com/500/280'},
    {url: 'https://placekitten.com/499/280'},
    {url: 'https://placekitten.com/500/281'},
]

    return(

        <main>

            <div className='carousel' >
                <Carousel slides={slides} />
            </div>

                <div className='tablet__wrapper'>
                    {
                        props.allShows.map((singleShow) => (
                            <Link to={`/shows/${singleShow.show_id}`}>
                            <ShowCard
                            key={singleShow.show_id}
                            show_id={singleShow.show_id}
                            image={singleShow.image}
                            artist={singleShow.artist}
                            date={singleShow.date}
                            venue={singleShow.venue}
                            address={singleShow.address}
                            doors={singleShow.doors}
                            genre={singleShow.genre}
                             />
                            </Link>))
                    }
                </div>
        </main>
    )
}

export default Discover;