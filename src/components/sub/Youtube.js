import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Youtube() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<Layout name={'Youtube'}>
				<div className='title'>
					<h1>EXCULSIVE VIDEO</h1>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium
						<br />
						doloremque laudantium, totam rem aperiam, eaque ipsa quae.
					</p>
				</div>
				{vidData.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					const date = vid.snippet.publishedAt;

					return (
						<article
							key={idx}
							onClick={() => {
								pop.current.open();
								setIndex(idx);
							}}>
							<div
								className='pic'
								data-aos='flip-right'
								data-aos-duration='1000'
								data-aos-offset='500'>
								<img src={vid.snippet.thumbnails.standard.url} />
							</div>
							<h2>{tit.length > 33 ? tit.substr(0, 33) + '...' : tit}</h2>
							<p>{desc.length > 141 ? desc.substr(0, 141) + '...' : desc}</p>
							<span>{date.split('T')[0]}</span>
						</article>
					);
				})}

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

			<Popup ref={pop}>
				{vidData.length !== 0 && (
					<>
						<iframe
							src={`https://www.youtube.com/embed/${vidData[index].snippet.resourceId.videoId}`}
							frameBorder='0'></iframe>
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Youtube;
