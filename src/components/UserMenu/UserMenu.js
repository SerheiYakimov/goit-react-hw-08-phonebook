import { useSelector, useDispatch } from "react-redux";
import { getUserName } from "../../redux/auth/auth-selectors";
import { logoutThunk } from "../../redux/auth/thunks";
import s from '../UserMenu/UserMenu.module.css'
import toast from 'react-hot-toast';

export function UserMenu() {

    const name = useSelector(getUserName);
    const dispatch = useDispatch();
    const handleLogout = () => {
        // console.log('Click')
        dispatch(logoutThunk());
        toast.success('You are signed out!')
    }

    return (
        <div className={s.menu}>
            <p className={s.text}>Hello, {name}!</p>
            <button type="button" className={s.button} onClick={handleLogout}>Log Out</button>
        </div>
    )
}