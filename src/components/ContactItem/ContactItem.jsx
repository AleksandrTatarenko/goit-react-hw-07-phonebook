import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

import { Text, Button } from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (<>
        <Text>{contact.name}: {contact.number}</Text>
        <Button onClick={handleDelete}>Delete</Button>
    </>)
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};
