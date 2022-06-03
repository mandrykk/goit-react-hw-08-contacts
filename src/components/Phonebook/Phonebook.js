import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import { nanoid } from 'nanoid';
import { Box, Button, TextField } from '@mui/material';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const addContactItem = ({ name, number }) => {
    const contact = {
      id: nanoid(), name, number,
    };
    
    if (contacts.find((item) =>
      (item.name.toLowerCase()) === (contact.name.toLowerCase()))) {
      return alert(`Contact ${name} already exists`);
    } else if (contacts.find((contact) => contact.number === number)) {
      alert(`${number} already exists`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");
    addContactItem({ name, number });
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          autoComplete="off"
          oValidate sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            placeholder="Jane Smith"
           
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            fullWidth
            id="number"
            label="Number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\styles]?\(?\d{1,3}?\)?[-.\styles]?\d{1,4}[-.\styles]?\d{1,4}[-.\styles]?\d{1,9}"
            value={number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            color="secondary"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Contact
          </Button>
        </Box>
      </Box>
    </>
  );
}