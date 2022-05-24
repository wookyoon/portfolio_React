import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
const path = process.env.PUBLIC_URL;

function Department() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.members);
			console.log(members);
		});
	}, []);

	useEffect(() => {
		AOS.init();
	});
	return (
		<Layout name={'Department'} img={'pic1.jpg'}>
			<div className='title'>
				<h1>CEO's DESK</h1>
			</div>
			<section className='intro'>
				<div className='wrap'>
					<div className='left'>
						<img src={`${path}/img/ceo.jpg`} alt='' />
					</div>
					<div className='right'>
						<h2>WELCOME TO THE BEST UNIVERSE in the world</h2>
						<p>
							&nbsp;The Chief Electoral Office functions under the overall
							supervision and control of the Election Commission of The
							instructions issued World.
						</p>
						<h3>
							CEO &nbsp;
							<span>Elena Damyanova</span>
						</h3>
						<a href='#'>VIEW MORE</a>
					</div>
				</div>
			</section>
			<div
				className='summary'
				data-aos='fade-up'
				data-aos-duration='1000'
				data-aos-offset='500'>
				<h1>OUR EXPERTS</h1>
				<p>
					Suspendisse rutrum nibh urna, nec sodales enim sollicitudin sed.
					Vivamus <br /> malesuada libero quis quam faucibus ac condimentum.
				</p>
			</div>
			<ul className='memberList'>
				{members.map((member, idx) => {
					return (
						<li key={idx}>
							<div className='inner'>
								<div
									data-aos='flip-right'
									data-aos-duration='1000'
									data-aos-offset='400'>
									<img src={`${path}/img/${member.pic}`} alt='' />
								</div>
								<h2>{member.name}</h2>
								<p>{member.position}</p>
							</div>
						</li>
					);
				})}
			</ul>
			<div className='contact'>
				<div className='warp'>
					<h1>JOIN OUR NEWSLETTER</h1>
					<p>Class aptent taciti sociosqu ad litora torquent per</p>

					<input id='email' type='text' placeholder='Email' name='email' />
					<button>
						<a href='#'>SUBSCRIBE NOW</a>
					</button>
				</div>
			</div>
		</Layout>
	);
}

export default Department;
