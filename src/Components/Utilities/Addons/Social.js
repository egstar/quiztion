import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialConnect = () => {
    return (
        <div className="row g-4 m-auto top-0 d-flex justify-content-center align-items-center">
              <div className='col-md-12 col-4'>
                <span className="SocialButton"><FontAwesomeIcon className="SocialConnect" icon={['fab', "github"]} /></span>
              </div>
              <div className='col-md-12 col-4'>
                <span className="SocialButton twitter"><FontAwesomeIcon className="SocialConnect" icon={['fab', "twitter"]} /></span>
              </div>
              <div className='col-md-12 col-4'>
                <span className="SocialButton google"><FontAwesomeIcon className="SocialConnect" icon={['fab', "google"]} /><sup style={{fontSize:'1.5rem',fontWeight:'bold'}}>+</sup></span>
              </div>
        </div>
    )
}