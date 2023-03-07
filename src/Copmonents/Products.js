import React from 'react';
import NavBar from './NavBar';
import { Link,Outlet } from 'react-router-dom';

function Products() {
	return (
		<div>
			<NavBar />
			<input type='search' placeholder='Seaarch Products' />
			<ul>
				<li>
					<Link to='featured'> Featured </Link>
				</li>
				<li>
					<Link to='new'> New </Link>
				</li>
			</ul>
      <Outlet/>
		</div>
	);
}

export default Products;
