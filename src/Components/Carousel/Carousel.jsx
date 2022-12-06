import './Carousel.scss'
import { useState } from 'react';

function Carousel ({slides}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }


    return(
       <div className='carousel__exterior'>
         <div className='carousel__interior' style={slideStyle}>
            
         </div>
       </div>
    )
    
}

export default Carousel;


