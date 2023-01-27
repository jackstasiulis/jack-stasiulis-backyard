import './Carousel.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import logoCarousel from '../../assets/Backyard-logo-white.png'

function Carousel ({slides}) {

// declare state variables for our slide index
    const [currentIndex, setCurrentIndex] = useState(0);

// setting the background of each slide to the image specified in Discover page under the slides array
    const slideStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }

// function for the left facing arrow to go to the previous carousel slide
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
      setCurrentIndex(newIndex);
    }
// function for the right facing arrow to go to the next carousel slide
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length -1;
      const newIndex = isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(newIndex);
      // console.log(currentIndex)
    }
// function for our bottom dots to select a slide to skip to
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex)
    }

// state variable for our displayed slide
const [isPlaying, setIsPlaying] = useState(true);
// calls go to next after 10 seconds
  useEffect(()=>{
    if(isPlaying){
      setTimeout(()=>{
        goToNext()}, 10000);
    }
  },[currentIndex])

    return(
       <div className='carousel__exterior'>
        <div className='carousel__leftArrow' onClick={goToPrevious}>↽</div>
        <div className='carousel__rightArrow' onClick={goToNext}>⇁</div>

        <img className='carousel__logo' src={logoCarousel} alt="" />


        <div className='carousel__interior' style={slideStyle}>
        </div>
        <div className='carousel__dots--container'>
          {slides.map((slide, slideIndex) => (
            <div className='carousel__dots' onClick={() => goToSlide(slideIndex)} key={slideIndex}>⬤</div>
          ))}
        </div>
       </div>
    )
}

export default Carousel;


