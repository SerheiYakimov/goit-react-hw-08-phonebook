
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

const isAuth = false;


export default function App() {
    
   return (
        <div className="App">
           <header className="App-header">
               <nav className="nav">
                   <ul>
                       <li>
                           <Link to="/">Home</Link>
                       </li>
                       <li>
                           <Link to="/contacts">Contacts</Link>
                       </li>
                       <li>
                           <Link to="/login">Login</Link>
                       </li>
                       <li>
                           <Link to="/register">Register</Link>
                       </li>
                   </ul>
               </nav>
                
           </header>
           <main>
               <Routes>
                   <Route path="/" element={<PrivateRoute isAuth={isAuth} component={Home}/>} />
                   <Route path="/contacts" element={<PrivateRoute isAuth={isAuth} component={Contacts} />} />
                   <Route path="/login" element={<PublicRoute isAuth={isAuth} component={Login}/>} />
                   <Route path="/register" element={<PublicRoute isAuth={isAuth} component={Register}/>}/>
               </Routes>
           </main>
        </div>
    );
}
