import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Copmonents/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Copmonents/About';
import Consultation from './Copmonents/Consultation';
import NoMatchRoute from './Copmonents/NoMatchRoute';
import Featured from './Copmonents/Featured';
import NewProducts from './Copmonents/NewProducts';
import Products from './Copmonents/Products';
import Users from './Copmonents/Users';
import UsersDetail from './Copmonents/UsersDetail';
import Admin from './Copmonents/Admin';
import ThirdUserDetail from './Copmonents/ThirdUserDetail';
import FirstUserDetail from './Copmonents/FirstUserDetail';
import SecondUserDetail from './Copmonents/SecondUserDetail';
function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='*' element={<NoMatchRoute />} />
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='consultation' element={<Consultation />} />
				<Route path='products' element={<Products />}>
					<Route index element={<Featured />} />
					<Route path='featured' element={<Featured />} />
					<Route path='new' element={<NewProducts />} />
				</Route>
				<Route path='users' element={<Users />}>
					<Route path='FirstUserDetail' element={<FirstUserDetail />} />
					<Route path='SecondUserDetail' element={<SecondUserDetail />} />
					<Route path='ThirdUserDetail' element={<ThirdUserDetail />} />
					{/* <Route path=':userId' element={<UsersDetail />} />
					<Route path='admin' element={<Admin />} /> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
