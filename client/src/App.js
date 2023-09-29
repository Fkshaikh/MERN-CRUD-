import './App.css';
import Alluser from './components/Allusers';
import Home from './components/Home';
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddUser from './components/Adduser';
import Edituser from './components/Edituser';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/alluser" element={<Alluser />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edit/:id" element={<Edituser />} />
        <Route path="/delete/:id"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
