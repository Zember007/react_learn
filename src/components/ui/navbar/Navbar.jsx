import React from 'react';
import { Link } from 'react-router-dom'; 


const Navbar = () => {
    return (
        <div className='navbar'>            
            <Link to='/about'>about</Link>
            <Link to='/posts'>posts</Link>
        </div>
    );
};

export default Navbar;