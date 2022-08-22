import photo1 from '../photo1.png';
import photo2 from '../photo2.png';
import photo3 from '../photo3.png';
import photo4 from '../photo4.png';
import photo5 from '../photo5.png';
import photo6 from '../photo6.png';
import photo7 from '../photo7.png';
import photo8 from '../photo8.png';
import photo9 from '../photo9.png';
import photo10 from '../photo10.png';
import photo11 from '../photo11.png';
import photo12 from '../photo12.png';


function Photos() {
    return(
  
        <div>
    <div className='photosBackground'>
         <div class="title">
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img src={ photo12 } class="photo_box" alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo11 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo10 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo9 } alt="portfolio" />   
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo8 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo7 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo6 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo5 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo4 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo3 } alt="portfolio" /> 
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo2 } alt="portfolio" />
            </div>
        </div>
        <div class="corner-4-box">
            <div class="corner-4-textbox">
                <img class="photo_box" src={ photo1 } alt="portfolio" />
            </div>
        </div>
        </div>
    </div>
        </div>

    )
}
export default Photos;