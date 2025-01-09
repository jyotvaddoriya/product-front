import Nav from './component/Nav';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './component/Footer.jsx';
import Signup from './component/Signup.jsx';
import PrivetCom from './component/PrivetCom.jsx';
import Login from './component/login.jsx';
import AddProduct from './component/AddProduct.jsx';
import ProductList from './component/ProductList.jsx';
import UpdateProduct from './component/UpdateProduct.jsx';
import Aboutus from './component/Aboutus.jsx';

function App() {
  return (
    <>
   
      <div className='bg'>
        <div className="App">
          <Router>

            <Nav />
            <Routes>

              <Route element={<PrivetCom />}>
                <Route path="/home" element={<ProductList/>} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/update/:id" element={<UpdateProduct/>} />
                <Route path="/abouts" element={<Aboutus/>} />
                <Route path="/logout" element={<h1>logout</h1>} />
                <Route path="/profile" element={<h1>profile</h1>} />
              </Route>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes> 

            <Footer />
          </Router>



        </div>
      </div>
     
    </>
  );
}

export default App
