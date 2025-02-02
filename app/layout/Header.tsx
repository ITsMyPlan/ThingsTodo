import LoginForm from '../components/auth/signIn/LoginForm';
import Logout from '../components/auth/signOut/Logout';

function Header() {
  return (
    <>
      <LoginForm />
      <Logout />
    </>
  );
}

export default Header;
