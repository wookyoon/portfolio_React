import Layout from '../common/Layout';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from '../common/Popup';

function Youtube() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='title'>
					<h1>Das Homme</h1>
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
							<div className='pic'>
								<img src={vid.snippet.thumbnails.standard.url} />
							</div>
							<h2>{tit.length > 19 ? tit.substr(0, 19) + '...' : tit}</h2>
							<p>{desc.length > 120 ? desc.substr(0, 120) + '...' : desc}</p>
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
