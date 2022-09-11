import { BoxView } from '../../Utilities/Addons/Box.js';
import SignUpForm from './SignForm.js'
function Signup() {
    return (
      <div className="main">
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{
        width:"100%",
        height:"100vh",
    }}>
        {BoxView(<SignUpForm />,"SignUpBox")}
        </div>
      </div>
    );
  }
  
  export default Signup;