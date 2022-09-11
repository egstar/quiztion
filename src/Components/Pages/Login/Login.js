import { LoginFormFunction} from './LoginForm'
import Logo  from '../../Utilities/Assits/imgs/logo.png';
import { SocialConnect } from '../../Utilities/Addons/Social';

export const LogIn = function LogIn() {
    return (
        <div className="row g-1">
          <div className="SideImage">
            <img className="Logo" src={Logo} alt='QuizTion' />
          </div>
          <div className="col-md-8 mt-2">
            <LoginFormFunction />
          </div>
          <div className="breakBar d-flex justify-content-center align-items-center col-md-1 col-12">
            <span className="OrBar"> OR </span>
          </div>
          <div className="col-md-3 col-12 m-top ">
            <SocialConnect />
          </div>
      </div>
    )
}