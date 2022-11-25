import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectVisibleContacts, selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "redux/operations";
import { List, Item, Text, Error } from 'components/Contacts/Contacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectVisibleContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    
    return (<div>
        {isLoading && <Text>Loading contacts...</Text>}
        {error && <Error>{error}</Error>}
        {contacts && <List>
            {contacts.map((contact) => {
                return (
                    <Item key={contact.id}>
                        <ContactItem contact={contact} />
                    </Item>
                    )
                })}
        </List>}
    </div>
    );     
};
