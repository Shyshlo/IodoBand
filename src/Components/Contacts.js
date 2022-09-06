import readhead from '../ReadHead.png';
import myod from '../MyOd.png';
import nora from '../Нора.png';
import smokkin from '../Smokkin.png';
import shishka from '../Шишка.png';
import coyote from '../Coyote.png';


function Contacts() {


    return (
        <div className='ContactsBlock' data-aos="fade-left" data-aos-duration="2000">
        <div className="Contacts-main-container">
            <div className="Contacts-container">
                <div className='contaactsTitle' data-aos="fade-zoom-in">
            <h1 className='Home-contacts-header'>КОНТАКТЫ</h1>
              </div>

            <div className="Contacts-data-container">
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header tel">+375295687859</h3>
                    <p className="Contacts-data-par">viber</p>
                    <p className="Contacts-data-par">Telegram</p>
                    <p className="Contacts-data-par">whatsapp</p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Сoциальные сети:</h3>
                    <p className="Contacts-data-par"><a href="https://www.instagram.com/iodo_band/" target="_blank"><img src="https://img.icons8.com/fluency/344/instagram-new.png" className="icone_2" alt="ВК" /></a></p>
                    <p className="Contacts-data-par"><a href="https://vk.com/lex_iodoofficial" target="_blank"><img src="https://img.icons8.com/color/344/vk-com.png" className="icone_2" alt="ВК" /></a></p>
                </div>
                <div className="Contacts-data-innerCont">
                    <h3 className="Contacts-data-header">Выступаем здесь:</h3>
            <ul className='sticker'>
            <li className="img_pos">
            <img className="img" src={readhead} alt="portfolio" width='150px'/>
            <img className="img rotate_1" src={nora} alt="portfolio" width='150px'/>
            </li>
            <li className="img_pos">
            <img className="img rotate_2" src={smokkin} alt="portfolio" width='150px'/>
            <img className="img rotate_3" src={myod} alt="portfolio" width='150px'/>
            </li>
            <li className="img_pos">
            <img className="img" src={shishka} alt="portfolio" width='150px'/>
            <img className="img rotate_1" src={coyote} alt="portfolio" width='150px'/>
            </li>
            </ul>
                </div>
            </div>

          

            </div>
        </div>

        </div>
    )
}

export default Contacts;