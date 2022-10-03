import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
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
import Sea from './components/Pages/Sea/Sea.jsx';
import Songs from './components/Pages/Songs/Songs.jsx';
import Villagers from './components/Pages/Villagers/Villagers.jsx';

import Houseware from './components/Pages/Items/Houseware/Houseware.jsx';
import Misc from './components/Pages/Items/Misc/Misc.jsx';
import Wallmounted from './components/Pages/Items/Wallmounted/Wallmounted.jsx';


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
                <Route path='/sea' element={ <Sea  /> } />
                <Route path='/songs' element={ <Songs  /> } />
                <Route path='/villagers' element={ <Villagers  /> } />
                
                <Route path='/items/houseware' element={ <Houseware  /> } />
                <Route path='/items/misc' element={ <Misc  /> } />
                <Route path='/items/wallmounted' element={ <Wallmounted  /> } />

              </Routes>


          <Footer  />
        
        </Router>
      </ACContextProvider>
    </div>
  )
};

export default App;
