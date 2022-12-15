import './Discover.scss';
import axios from 'axios';
import ShowCard from '../../Components/ShowCard/ShowCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../Components/Carousel/Carousel';

// import seeingStrangers from 


function Discover (props) {

// Image URLs for the discover carousel
const slides = [
    {url: 'https://res.cloudinary.com/do5k651qd/image/upload/v1670570548/Screen_Shot_2022-11-16_at_10.41.43_PM_tvoox9.png'},
    {url: 'https://res.cloudinary.com/do5k651qd/image/upload/v1670570335/IMG_3535_fofovb.jpg'},
    {url: 'https://res.cloudinary.com/do5k651qd/image/upload/v1670570335/Screenshot_2022-12-08_at_11.05.56_PM_ylptko.jpg'},
    {url: 'https://res.cloudinary.com/do5k651qd/image/upload/v1670570334/Screenshot_2022-12-08_at_11.02.16_PM_azlqpp.jpg'},
]

    return(

        <main>

            <div className='carousel' >
                <Carousel slides={slides} />
            </div>

                <div className='tablet__wrapper'>
                    {
                // maps through show data to provide info to our discover page cards
                        props.allShows.map((singleShow) => (
                            // <Link to={`/shows/${singleShow.show_id}`}>
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
                            users_id={singleShow.users_id}

                            handleDeleteShow={props.handleDeleteShow}
                            getShows={props.getShows}
                            // user={props.user}
                             />
                            // </Link>
                            ))
                    }
                </div>
        </main>
    )
}

export default Discover;