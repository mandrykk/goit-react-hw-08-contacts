import { Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './StylesForPages.module.css';

export default function ErrorPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.error}>
            <h1>404</h1>
            <p>File not found<br/>
                The site configured at this address does not contain the requested file.
            </p>
            <Button
                color="secondary"
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate(location?.state?.from ?? '/')}
            >
                Return
            </Button>
        </div>
    )
}