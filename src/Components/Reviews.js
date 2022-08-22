import rev1 from '../rev1.png';
import rev2 from '../rev2.png';
import rev3 from '../rev3.png';
import rev4 from '../rev4.png';
import rev5 from '../rev5.png';
import rev6 from '../rev6.png';
import rev7 from '../rev7.png';
import rev8 from '../rev8.png';


function Reviews() {
    return(
       
        <div>
            <div className='reviewsBackground'>
            <div className="wave_inner">

        <div className="wave">
            <button className="button_rew one"></button>
            <img src={rev1} alt="img1" />
        </div>

        <div className="wave">
            <button className="button_rew two"></button>
            <img src={rev2} alt="img2" />
        </div>

        <div className="wave">
            <button className="button_rew three"></button>
            <img src={rev3} alt="img3" />
        </div>

        <div className="wave">
            <button className="button_rew four"></button>
            <img src={rev4} alt="img4" />
        </div>

        <div className="wave">
            <button className="button_rew one"></button>
            <img src={rev5} alt="img5" />
        </div>
        <div className="wave">
            <button className="button_rew two"></button>
            <img src={rev6} alt="img6" />
        </div>
        <div className="wave">
            <button className="button_rew three"></button>
            <img src={rev7} alt="img7" />
        </div>
        <div className="wave">
            <button className="button_rew four"></button>
            <img src={rev8} alt="img8" />
        </div>
            

        </div>
    </div>
        </div>
       
    )
}
export default Reviews;