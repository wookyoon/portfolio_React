import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: 'aqua' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<h1>
					<NavLink activeStyle={active} exact to='/'>
						LOGO
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink activeStyle={active} to='/'>
							Department
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/'>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/'>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/'>
							Community
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/'>
							Location
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/'>
							Join
						</NavLink>
					</li>
				</ul>

				<a href='#' className='menuMo'>
					<FontAwesomeIcon icon={faBars} />
				</a>
			</div>
		</header>
	);
}

export default Header;
