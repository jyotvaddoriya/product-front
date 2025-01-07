import Nav from './component/Nav';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer.jsx';
import Signup from './component/Signup.jsx';
import PrivetCom from './component/PrivetCom.jsx';
import Login from './component/login.jsx';
function App() {
  

  return (
    <>
    <div className="App">
    <Router>

      <Nav/>
      <Routes>
        
        <Route element={<PrivetCom/>}>
        <Route path="/home" element={<h1>home</h1>} />
        <Route path="/add" element={<h1>addd</h1>} />
        <Route path="/update" element={<h1>update</h1>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        </Route>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
      <Footer/>
    </Router>
   
   
     
    </div>
      
    </>
  );
}

export default App
