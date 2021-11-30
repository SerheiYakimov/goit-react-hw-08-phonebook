import Form from "../components/Form/Form";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";


export function Contacts() {
    return (
        <>
            <h2 className="title">Phonebook</h2>
                <Form/>
                <div>
                    <h2 className="title">Contacts</h2>
                    <Filter/>
                    <ContactList/>
                </div>
        </>
    )
}



