import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import { useNavigate } from 'react-router-dom';

function NavBar() {
	const navigate = useNavigate();
	const NavLinkStyle = ({ isActive }) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
		};
	};
	return (
		<div className='nav-bar'>
			<h2>
				<a href='#'>Cogent Labs</a>
			</h2>
			<ul>
				<li>
					<NavLink to='/' style={NavLinkStyle}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/About' style={NavLinkStyle}>
						About US
					</NavLink>
				</li>
				<li>
					<NavLink to='/products' style={NavLinkStyle}>
						Products
					</NavLink>
				</li>
			</ul>
			<button
				className='btn btn-primary'
				onClick={() => {
					navigate('consultation');
				}}
			>
				Book a Consultation
			</button>
		</div>
	);
}

export default NavBar;
