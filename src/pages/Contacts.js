import Form from "../components/Form/Form";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { userIsAuth } from "../redux/auth/auth-selectors";
import s from '../pages/Contacts.module.css'
export function Contacts() {
    const isAuth = useSelector(userIsAuth);
   
    return (
        <>
            {isAuth && (
                <div className={s.container}>
                    <h2 className="title">Phonebook</h2>
                    <Form />
                        <div>
                            <h2 className="title">Contacts</h2>
                            <Filter />
                            <ContactList />
                        </div>
                </div>
            )}    
        </>
    )
}



