import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './Utilities/css/style.css'
import { Link } from 'react-router-dom'
import React from 'react'
const Header = () => {
    const [activate, isActive] = React.useState(false)
    function setActive(){
        isActive(!activate)
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light sticky-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><span className="QuiztionPart1"><h1 className="d-inline QuiztionPart2">Q</h1><h2 className='d-inline'>UIZ</h2></span><h2 className="d-inline">TION</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Main Menu</h5>
                            <button type="button" className="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/"  className={activate? 'nav-link active': 'nav-link'} aria-current="page" onClick={setActive}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/profile"  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboards
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-light">
                                    <li><Link to="/quiz"  className="dropdown-item">Quiz</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link to="/admin"  className="dropdown-item">Admin</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className="nav-link">Sign Up</Link>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li className="nav-item">
                                <Link to="/login"  className="nav-link" aria-current="page">Sign in</Link>
                            </li>
                            <li>
                                <hr className="nav-divider" />
                            </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;