import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { Box, TextField } from '@mui/material';
import { changeFilter } from '../../redux/phonebook/phonebook-operations';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
    
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = (value) => dispatch(changeFilter(value));

  const handleFilterChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h2 className={styles.span}>Find contacts by name</h2>
      <Box
        component="form"
        autoComplete="off"
        oValidate sx={{ mt: 1, width: 580 }}
      >
        <TextField
          margin="normal"
          fullWidth
          id="filter"
          label="Search"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onInput={handleFilterChange}
        />
      </Box>
    </Box>
  );
}