
import "./App.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Contacts } from './pages/Contacts';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NotFound } from './pages/NotFound';
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { currentThunk } from "./redux/auth/thunks";
import { useSelector } from "react-redux";
import { userIsAuth, getIsCurrentUser } from "./redux/auth/auth-selectors";
import { UserMenu } from "./components/UserMenu/UserMenu";
import { Toaster } from 'react-hot-toast';


const setActive = ({ isActive }) => isActive ? 'activeLink' : 'link';


export default function App() {
    
    const dispatch = useDispatch();
    const isAuth = useSelector(userIsAuth);
    const isCurrentUser = useSelector(getIsCurrentUser);
    
    useEffect(() => {
        dispatch(currentThunk());
    }, [dispatch]);
    
   return (
        !isCurrentUser && (
            <div className="App">
                <header className="App-header">
                    <nav className="nav">
                        <div className="list">
                            <NavLink to="/" className={setActive}>Home</NavLink>
                            {isAuth &&
                                (<NavLink to="/contacts" className={setActive}>Contacts</NavLink>)
                            }
                        </div>
                        {isAuth ? (  
                            <UserMenu />
                            )
                        : (
                        <div className="list">
                            <NavLink to="/login" className={setActive}>Sign In</NavLink>
                            <NavLink to="/register" className={setActive}>Register</NavLink>    
                        </div>   
                        )}
                    </nav>
                </header>
                <main>
                <Routes>
                    <Route path="/" element={<PublicRoute isAuth={isAuth} component={Home}/>} />
                    <Route path="/contacts" element={<PrivateRoute isAuth={isAuth} component={Contacts} />} />
                    <Route path="/login" element={<PublicRoute isAuth={isAuth} component={Login} navigateTo="/contacts" restricted/>} />
                    <Route path="/register" element={<PublicRoute isAuth={isAuth} component={Register} navigateTo="/contacts" restricted/>} />
                    <Route path='/*' element={<NotFound />}></Route>
                </Routes>
               </main>
               < Toaster 
                    position ="top-center"
                    reverseOrder={false}
                />
            </div>
       )
    );
}

