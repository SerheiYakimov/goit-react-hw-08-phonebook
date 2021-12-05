import { createSelector } from "reselect";

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filterReducer;


export const getAllContacts = createSelector(
    [getContacts, getFilter],
    (contactsArray, filterValue) => {
        let normalizeFilter = filterValue.toLowerCase();
        return contactsArray.filter((contact) => {
            return contact.name.toLowerCase().includes(normalizeFilter)
        });
    }
);


// export const getAllContacts = state => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);
//     const normalizeFilter = filter.toLowerCase();
//     if (filter.length > 0) {
//         return contacts.filter((contact) =>
//             contact.name.toLowerCase().includes(normalizeFilter),
//         );
//     } else {
//     return contacts;
//     }
// }

