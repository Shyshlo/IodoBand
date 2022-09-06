
import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../slider1.jpg';
import two from '../slider2.jpg';
import three from '../slider3.jpg';




 function Slider() {

    return (
        <div className='sliderAll'>
        
   <Carousel>
    <Carousel.Item style={{'height': '1000px'}}>
    <img className='d-block w-100'
        src={two} alt='photo 2' />
        {/*<Carousel.Caption style={{'color': '#000000', 'font-weight': 'bold', 'font-size': '20px'}}>
            <h3 className='sliderShift'>iodo-band</h3>
            <p className='sliderShift'>31 августа</p>
            <p className='sliderShift'> Red Head</p>
            <p className='sliderShift'>22.00</p>
        </Carousel.Caption>
    */}
    </Carousel.Item>
    <Carousel.Item style={{'height': '1000px'}}>
        <img className='d-block w-100'
        src={one} alt='photo 1' />
        {/*<Carousel.Caption style={{ 'text': 'center','color': '#000000', 'font-weight': 'bold', 'font-size': '20px'}}>
            <h3 className='sliderShift'>iodo-band</h3>
            <p className='sliderShift'>Это топовый коллектив на любой ваш праздник: свадьбу, юбилей, Новый год</p>
        </Carousel.Caption>
        */}
    </Carousel.Item>
    <Carousel.Item style={{'height': '1000px'}}>
        <img className='d-block w-100'
        src={three} alt='photo 1' />
        {/*}
        <Carousel.Caption style={{'font-weight': 'bold', 'font-size': '20px'}}>
            <h3 className='sliderShift'>iodo-band</h3>
            <p className='sliderShift'>100% живая музыка и харизма!</p>
           
        </Carousel.Caption>
    */}
    </Carousel.Item>
    
    </Carousel>
    </div>
    
)}

export default Slider;