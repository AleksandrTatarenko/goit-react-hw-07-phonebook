export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    if (filter) {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
    }
    return contacts;
}