import { Container, Input, Text } from 'components/Filter/Filter.styled';
import { useDispatch } from "react-redux";
import { updateFilter } from "redux/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(updateFilter(e.target.value));
    }

    return (<Container>
        <Text>Find contacts by name</Text>
        <Input onChange={handleChange} type='text'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required></Input>
    </Container>
    );
};
