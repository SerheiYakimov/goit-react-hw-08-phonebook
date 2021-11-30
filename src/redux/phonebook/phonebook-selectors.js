export const getContacts = state => state.contacts;
export const getFilter = state => state.filterReducer;


export const getAllContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    const normalizeFilter = filter.toLowerCase();
    if (filter.length > 0) {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(normalizeFilter),
        );
    } else {
    return contacts;
    }
}

