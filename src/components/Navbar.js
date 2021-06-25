import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='nav-wrapper blue darken-3'>
			<div className='container'>
				<a className='brand-logo'>Tom's Story</a>
				<ul className='right'>
					<li>
						<Link to='/tom-story'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<NavLink to='/contact'>Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
