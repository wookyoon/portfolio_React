import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const path = process.env.PUBLIC_URL;

function Visual() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<figure className='myScroll on'>
			<div
				className='video'
				data-aos='zoom-out'
				data-aos-duration='3000'
				data-aos-delay='500'>
				<video src={`${path}/img/vid2.mp4`} loop autoPlay muted></video>
			</div>
			<div className='wrap'>
				<h1 data-aos='fade-down' data-aos-duration='3000' data-aos-delay='2000'>
					Urban Luxury Style
				</h1>
				<h2 data-aos='fade-left' data-aos-duration='3000' data-aos-delay='3000'>
					TWO FOR TWO
				</h2>
				<h3
					data-aos='fade-up'
					data-aos-duration='3000'
					data-aos-delay='3000'
					data-aos-offset='-100'>
					made by gentleman
				</h3>
			</div>
		</figure>
	);
}

export default Visual;
