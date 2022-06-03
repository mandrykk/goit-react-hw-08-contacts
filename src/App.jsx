import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import LinearProgress from '@mui/material/LinearProgress';
import AppBar from './components/AppBar';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(state => state.isFetchingCurrent);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<LinearProgress color="secondary" />}>
            <Routes>
              <Route path="/" element={<PublicRoute component={HomePage} restricted />} />
              <Route path="/register" element={<PublicRoute component={RegisterPage} restricted />} />
              <Route path="/login" element={<PublicRoute component={LoginPage} restricted />} />
              <Route path="/contacts" element={<PrivateRoute component={ContactsPage} />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </>
      )
      }
    </>
  );
}

export default App;