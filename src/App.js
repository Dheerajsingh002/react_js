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

function App() {
  return (
    <div className="App">
      <UseReducer/>
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
