import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/phonebook/phonebook-selectors';
import { fetchContacts } from '../redux/phonebook/phonebook-operations';
import Phonebook from '../components/Phonebook/Phonebook';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import styles from './StylesForPages.module.css';

export default function ContactPage() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    return
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.contactTitle}>Contacts</h1>
      <Phonebook />
      <Filter />
      
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>Phonebook is empty</p>
      )}
    </>
  );
}