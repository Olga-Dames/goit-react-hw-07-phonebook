import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { ContactList } from './ContactList/ContactList';
import { Container, Heading, Title, Empty } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Empty>Your phonebook is empty</Empty>
      )}
    </Container>
  );
}
