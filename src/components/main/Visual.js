import React from 'react';
const path = process.env.PUBLIC_URL;

function Visual() {
	return (
		<figure>
			<img src={`${path}/img/visual1.jpg`} alt='' />
			<div className='wrap'>
				<h1>Organic Tea Shop</h1>
				<h2>TEA FOR TWO</h2>
				<div>
					<a href='#'>THE SHOP</a>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
