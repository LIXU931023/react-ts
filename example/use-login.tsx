import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

const useLogin = () => {
  const history = useHistory();
  if (!Cookies.get('user-token')) {
    console.log('uselogin')
    history.replace('/login')
  }
}

export default useLogin;
