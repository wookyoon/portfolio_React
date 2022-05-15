import { useEffect, useRef } from 'react';

const path = process.env.PUBLIC_URL;

function Layout(props) {
	const frame = useRef(null);
	// console.log(props.bg);

	useEffect(() => {
		frame.current.classList.remove('on');
		frame.current.classList.add('on');
	}, []);

	return (
		<section className={`content ${props.name}`} ref={frame}>
			{/* <figure style={{ backgroundImage: `url(${props.bg})` }}></figure> */}
			<figure>
				<div id='subTitle'>
					<h1>{props.name}</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						<br />
						Accusantium, sodales libre koulen aliquid.
					</p>
				</div>
			</figure>
			<div className='inner'>{props.children}</div>
		</section>
	);
}

export default Layout;
