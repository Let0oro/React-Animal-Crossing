import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ACContextProvider } from './context/context';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import Art from './components/Pages/Art/Art.jsx';
import Bugs from './components/Pages/Bugs/Bugs.jsx';
import Fish from './components/Pages/Fish/Fish';
import Fossils from './components/Pages/Fossils/Fossils.jsx';
import Items from './components/Pages/Items/Items.jsx';
import Music from './components/Pages/Music/Music.jsx';
import Sea from './components/Pages/Sea/Sea.jsx';
import Songs from './components/Pages/Songs/Songs.jsx';
import Villagers from './components/Pages/Villagers/Villagers.jsx';



const App = () => {

  return (
    <div className='App'>
      <ACContextProvider >
        <Router >

          <Header  />

              <Routes>

                <Route path='/' element={ <Main  /> } />

                <Route path='/art' element={ <Art  /> } />
                <Route path='/bugs' element={ <Bugs  /> } />
                <Route path='/fish' element={ <Fish  /> } />
                <Route path='/fossils' element={ <Fossils  /> } />
                <Route path='/items' element={ <Items  /> } />
                <Route path='/music' element={ <Music  /> } />
                <Route path='/sea' element={ <Sea  /> } />
                <Route path='/songs' element={ <Songs  /> } />
                <Route path='/villagers' element={ <Villagers  /> } />

              </Routes>


          <Footer  />
        
        </Router>
      </ACContextProvider>
    </div>
  )
};

export default App;
