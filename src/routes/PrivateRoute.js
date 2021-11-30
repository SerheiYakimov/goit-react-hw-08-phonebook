import { Navigate } from "react-router-dom";

export function PrivateRoute({isAuth, component: Component}) {
    return (
        <>
            <h1>Private</h1>
            {isAuth ? <Component /> : <Navigate to="/login"/> }
            
        </>
    )
}