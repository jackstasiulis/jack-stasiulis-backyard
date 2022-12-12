import './Carousel.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import logoCarousel from '../../assets/Backyard-logo-white.png'

function Carousel ({slides}) {


    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
      setCurrentIndex(newIndex);
    }
    const goToNext = () => {
      const isLastSlide = currentIndex === slides.length -1;
      const newIndex = isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(newIndex);
      console.log(currentIndex)
    }

    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex)
    }
    
    const [isPlaying, setIsPlaying] = useState(true);


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


