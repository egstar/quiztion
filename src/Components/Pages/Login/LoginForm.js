import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export function LoginFormFunction() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [staylogged, StayLogged] = React.useState(false)
    const [showPassword, setToShow] = React.useState(false)
    function handleStayLogged(){
        StayLogged(!staylogged);
    }
    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleShow(){
        setToShow(!showPassword)
    }
    return <div className="m-auto">    

    <form className="needs-validation">
        <div className="form-floating text-start mb-3">
            <input id="userName" type="text" className="form-control form-control-lg" maxLength="30" value={username} onChange={handleUsername} placeholder="Enter your user name" required />
            <label htmlFor="userName">Username</label>
        </div>
        <div className="form-floating  text-start  mb-3">
                <input id="passWord" className="form-control form-control-lg" maxLength="20" value={password} onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder="Enter your Password" required />
                <FontAwesomeIcon className={showPassword ? "fa-eye" : "fa-eye-slash"} onClick={handleShow} icon={showPassword ? "fa-eye" : "fa-eye-slash"} />
                <label htmlFor="passWord">Password</label>
                
        </div>
        <div className="mb-3 text-start row g-0">
                <div className="form-check form-switch col-8">
                    <input className="form-check-input" type="checkbox" role="switch" onChange={handleStayLogged} id="StayLoggedIn" value={staylogged}/>
                    <label className="form-check-label" htmlFor="StayLoggedIn">Remember me</label>
                </div>
                <div className="col-4 text-center"><button className="btn btn-sm btn-primary" type="submit">Sign in</button></div>
        </div>
    </form>
    <p>If you don't have an account, you can <Link to="/signup">Register</Link> now.</p>
</div>

}