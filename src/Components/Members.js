import Lex from '../Lex1.png';
import Vladimir from '../Vladimir1.png';
import Dmitriy from '../Dmitriy.png';
import Vitaliy from '../Vitaliy.png';
import Alexey from '../Alexey.png';
import video from '../music.mp4';




function Members() {
    return(
    <div>
<div class="stories">
            {/*<div class="video-container">
                <video class="bg-video" autoPlay muted loop>
                    <source src={video} type="video/mp4"/>
                </video>
            </div> 
    */}

<div className='stories-wrapper'>

<div className='story-bg'>
<div className='story'>
    <img src={Lex} width='200px' height='200px' alt='photo' className='story-image' data-aos="flip-up"/>
    <div className='story-text'>
        <h1 className='story-heading'>Иодо Алексей</h1>
        <p className="story-paragraph">Вокалист. Автор песен. Звукорежиссер.
        Его талант стал центром притяжения группы. Так и сформировался постоянный для группы состав: вокал, гитара, бас, барабаны, клавиши.</p>
    </div>
    </div>
        </div>

  
        <div className='story-bg'>
<div className='story'>
    <img src={Vladimir} width='200px' height='200px' alt='photo' className='story-image' data-aos="flip-up"/>
    <div className='story-text'>
        <h1 className='story-heading'>Козин Владимир</h1>
        <p className="story-paragraph">Прекрасный гитарист работающий и по сей день сессионно с артистами разного уровня. Крутой аранжировщик и саунд дизайнер.
"Знаю как спеть «Наше лето» и где находится яхта и парус."</p>
    </div>
    </div>
        </div>


     
<div className='story-bg'>
<div className='story'>
    <img src={Dmitriy} width='200px' height='200px' alt='photo' className='story-image' data-aos="flip-up"/>
    <div className='story-text'>
        <h1 className='story-heading'>Воронин Дмитрий</h1>
        <p className="story-paragraph">Тёмный,живущий среди Светлых, принимающий их обличаи. Хороший басист, немногословен, значит знает своё дело.</p>
    </div>
    </div>
        </div>

  

 
    <div className='story-bg'>
    <div className='story'>
    <img src={Vitaliy} width='200px' height='200px' alt='photo' className='story-image' data-aos="flip-up"/>
     <div className='story-text'>
        <h1 className='story-heading'>Боровков Виталий</h1>
        <p className="story-paragraph">Клавишник, текстовик, композитор, аранжировщик, тусовщик и стиляга. 
Проехал континент от Черного до Баренцева моря и от Западной Европы до Восточной Сибири. В основном работал с авторскими коллективами.</p>
    </div>
    </div>
        </div>

    <div className='story-bg'>
    <div className='story'>
    <img src={Alexey} width='200px' height='200px' alt='photo' className='story-image' data-aos="flip-up"/>
     <div className='story-text'>
        <h1 className='story-heading'>Шабан Алексей</h1>
        <p className="story-paragraph">Работал во многих коллективах у нас и за рубежом. Также занимается обучением игре на самом драйвом инструменте.

"Делаю то, что люблю, кайфую, жизнь без этого не представляю и делюсь этим со всеми!" </p>
    </div>
    </div>
        </div>



        </div>
        </div>

        </div>
    )
}

export default Members;