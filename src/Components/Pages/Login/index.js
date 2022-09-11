import { BoxView } from '../../Utilities/Addons/Box';
import { LogIn } from './Login'

function Login() {
  return (
    <div className="main container-fluid d-flex justify-content-center align-items-center" style={{
    }}>
      {BoxView(
        <LogIn />
        
      )}
    </div>
  );
}

export default Login;