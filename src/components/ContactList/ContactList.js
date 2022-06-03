import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import { Box } from '@mui/material';

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Box
        component="form"
        autoComplete="off"
        sx={{ mt: 1, width: 580, }}
      >
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={styles.item}>
              <ContactItem
                name={contact.name}
                number={contact.number}
                id={contact.id} />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}