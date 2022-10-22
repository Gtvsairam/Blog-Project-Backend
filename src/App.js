import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/MainHome/Home'
import Navbar from './Components/Navbar'
import Tollywood from './Pages/Tollywood';
import Technology from './Pages/Technology';
import Tourism from './Pages/Tourism';
import Hollywood from './Pages/Hollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import SingleBlogPage from './Components/SingleBlogPage';





function App() {
  return (
  <div className='App'>
    <Header/>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tollywood' element={<Tollywood/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Tourism' element={<Tourism/>}/>
        <Route path='/Hollywood' element={<Hollywood/>}/>
        <Route path='/Technology' element={<Technology/>}/>
        <Route path='/Fitness' element={<Fitness/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path='/blog' element={<SingleBlogPage/>}/>
      

      </Routes>
    </BrowserRouter>
  </div>
     );
}

export default App;

