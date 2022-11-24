import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { List, Item } from 'components/Contacts/Contacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

const getVisibleContacts = (contacts, filter) => {
    if (filter) {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
    }
    return contacts;
};

export const Contacts = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const visibleContacts = getVisibleContacts(contacts, filter);

    return (<div>
        <List>
            {visibleContacts.map((contact) => {
                return (
                    <Item key={contact.id}>
                        <ContactItem contact={contact} />
                    </Item>
                    )
                })}
        </List>
    </div>
    );     
};
