import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
const path = process.env.PUBLIC_URL;

function Department() {
	const [members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${path}/DB/member.json`).then((json) => {
			setMembers(json.data.members);
			console.log(members);
		});
	}, []);

	return (
		<Layout name={'Department'}>
			<div className='summary'>
				<h1>Our Experts</h1>
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
								<div>
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
