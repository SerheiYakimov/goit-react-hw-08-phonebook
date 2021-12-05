import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logoutThunk } from "../../redux/auth/thunks";

export function UserMenu() {

    const name = useSelector(getUserName);
    const dispatch = useDispatch();
    const handleLogout = () => {
        // console.log('Click')
        dispatch(logoutThunk());
    }

    return (
        <div>
            <p>Hello, {name}!</p>
            <button type="button" onClick={handleLogout}>Log Out</button>
        </div>
    )
}