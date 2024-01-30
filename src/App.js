import { BrowserRouter,  Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Forms from './Components/Forms';
import UseEffectExample from './Components/UseEffectExample';
import Users from './Components/Users';
import UseRefExample from './Components/UseRefExample';
import UseReducer from './Components/UseReducer';
import UseContext from './UseContexts.jsx';
import UseContexts from './UseContexts.jsx';
import Products from './pages/Products.jsx';
import Contects from './pages/Contects.jsx';
import Header from './Header/Header.jsx';
import Dynamic from './pages/Dynamic.jsx';


function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contects' element={<Contects/>}/>
        <Route path='/user/:id' element={<Dynamic/>}/>
      </Routes>
      {/* <UseContexts/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseRefExample/> */}
      {/* <Users/> */}
      {/* <Forms/> */}
      {/* <h1>UseEffect :-  It is Used to enable a Side-Effect Inside the Component</h1> */}
      {/* <UseEffectExample/> */}
      {/* <BrowserRouter>
      <Navbar text={"About"}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
