import Form from "../components/Form/Form";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { userIsAuth } from "../redux/auth/auth-selectors";

export function Contacts() {
    const isAuth = useSelector(userIsAuth);
    // console.log(isAuth);
    return (
        <>
            {isAuth && (
                <>
                    <h2 className="title">Phonebook</h2>
                    <Form />
                    <div>
                        <h2 className="title">Contacts</h2>
                        <Filter />
                        <ContactList />
                    </div>
                </>
            )}
            
        </>
    )
}



