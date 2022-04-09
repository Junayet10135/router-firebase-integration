import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'; 

const Header = () => {
    const { user, signOutFromGoogle}=useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>            
                <Link to='/register'>Register</Link>
                
                { user?.uid ?
                    <button onClick={signOutFromGoogle}>Sign out</button> :
                    <Link to='/login'>Log In</Link> 
                    
                }
                <span>{user?.displayName && user?.displayName} </span>
            </nav>
        </div>
    );
};

export default Header;