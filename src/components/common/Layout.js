import { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Layout(props) {
	const frame = useRef(null);
	console.log(props.bg);

	useEffect(() => {
		frame.current.classList.remove('on');
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			<figure style={{ backgroundImage: `url(${props.bg})` }}></figure>
			<figure></figure>
			<div className='inner'>
				<h1>{props.name}</h1>
				{props.children}
			</div>
		</section>
	);
}

export default Layout;
