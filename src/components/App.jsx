import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from "components/Contacts/Contacts";
import { Title } from "components/Contacts/Contacts.styled";
import { Filter } from 'components/Filter/Filter';

export const App = () => {

   return (<div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
    </div>
   )
}
