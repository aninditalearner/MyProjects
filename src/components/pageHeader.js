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
        navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
        }
    
    const handleInputBoxValue =(e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);
    }
    return (
        <div>
            <div className='search-header'>
                <Link to={`/`}><img className='brand-logo' src={logo} alt="logo"/></Link>
                <input
                type="text"
                placeholder="Search Wiley for what you're looking for"
                value={searchTerm}
                onChange={handleInputBoxValue}
                onKeyDown={handleSearch}
                />
                <div>
                    <img className='account-icon' src={account} alt="account"/>
                    <img className='cart-icon' src={cartIcon} alt="cart icon"/>
                    <img className='nav-icon' src={navIcon} alt="nav icon"/>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;