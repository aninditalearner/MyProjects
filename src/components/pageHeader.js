import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/pageHeader.css';
import logo from '../images/logo.svg';
import account from '../images/account.png';
import cartIcon from '../images/cart.png';
import navIcon from '../images/nav.png';

function PageHeader() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        if( e.key === 'Enter' ){
        navigate(`/search?query=${encodeURIComponent(searchTerm)}&sort=rel&page=1&size=2`);
        }
        }
    
    const handleInputBoxValue =(e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    }
    return (
        <div>           
            <header className="search-header">
                <nav className="navbar">
                <Link to={`/`}><img className='brand-logo' src={logo} alt="logo"/></Link>
                <input
                type="text"
                placeholder="Search Wiley for what you're looking for"
                value={searchTerm}
                onChange={handleInputBoxValue}
                onKeyDown={handleSearch}
                />
                <ul className="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/search?query=&sort=rel&page=1&size=5">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div>
                    <a href="/my-account"><img className='account-icon' src={account} alt="account"/></a>
                    <a href="/cart"><img className='cart-icon' src={cartIcon} alt="cart icon"/></a>
                    <a href="/menu"><img className='nav-icon' src={navIcon} alt="nav icon"/></a>
                </div>
                </nav>
            </header>
        </div>
    );
}

export default PageHeader;