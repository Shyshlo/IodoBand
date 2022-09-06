import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Components/Logo';

import Home from './Components/AboutUs';
import Users from './Components/Questions';
import About from './Components/Photos';

import './App.css';

import {

  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutUs from './Components/AboutUs';
import Reviews from './Components/Reviews';
import Contacts from './Components/Contacts';
import Photos from './Components/Photos';
import Tribute from './Components/Tribute';
import Questions from './Components/Questions';
import Footer from './Components/Footer';
import Video from './Components/Video';
import Booknow from './Components/Booknow';


import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  AOS.init()

  return (
    
<>
<Logo />


  <Router>




<nav>
    <Link to='/' className='Link'>О группе</Link>
    <Link to='/photo' className='Link'>Фото</Link>
    <Link to='/tribute' className='Link tributeLink'>Трибьют «Валерий Меладзе»</Link>
    <Link to='/questions' className='Link'>Вопрос/Ответ</Link>
    <Link to='/reviews' className='Link'>Отзывы</Link>
    <Link to='/contacts' className='Link'>Контакты</Link>
 	</nav>

      
<Routes>
  <Route path='/' element={<AboutUs />} />
  <Route path='/photo' element={<Photos />} />
  <Route path='/tribute' element={<Tribute />} />
  <Route path='/questions' element={<Questions />} />
  <Route path='/reviews' element={<Reviews />} />
  <Route path='/contacts' element={<Contacts />} />
</Routes>

</Router>

<Booknow />

<Footer />
</>
  );
}

export default App;
