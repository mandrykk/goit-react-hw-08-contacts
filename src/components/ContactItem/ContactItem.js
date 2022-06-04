import styles from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { Button } from '@mui/material';

export default function ContactItem({name, number, id}) {
    const dispatch = useDispatch();
    
    return (
        <>
            <span className={styles.span}>
                {name} : {number}
            </span>
            <Button
                color="secondary"
                type="button"
                variant="contained"
                onClick={() => dispatch(deleteContact(id))}
                sx={{ float: ' right' }}
            >
                Delete
            </Button>
        </>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};