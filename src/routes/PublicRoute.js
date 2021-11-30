import { Navigate } from "react-router-dom"

export function PublicRoute({ isAuth, component: Component }) {
    return (
        <>
            <h1>Public</h1>
            {isAuth ? <Navigate to="/"/> : <Component />}
            
        </>
    )
}