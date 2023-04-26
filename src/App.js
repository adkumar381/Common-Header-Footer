// take help from devops tutorial
import './Style.css';

import { Routes,Route } from 'react-router-dom';
import Header  from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs  from './components/ContactUs';
function App() {
  return (
    <>
    <Header/>   {/* header and footer we keep common so routes outside them. */}


     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />
     </Routes>


      <Footer/>
    </>
  );
}

export default App;
