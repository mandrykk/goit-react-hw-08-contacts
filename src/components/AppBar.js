import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
    
  return (
    <header>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}