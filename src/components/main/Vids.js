import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const path = process.env.PUBLIC_URL;

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<h1>Recent Youtube</h1>
				<ul>
					{vidData.map((vid, idx) => {
						const tit = vid.snippet.title;
						if (idx < 3) {
							return (
								<li
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<img src={vid.snippet.thumbnails.medium.url} />
									<h2>{tit.length > 40 ? tit.substr(0, 40) + '...' : tit}</h2>
								</li>
							);
						}
					})}
				</ul>
				<a href='#'>VIEW MORE</a>

				<div className='wrapper'>
					<div className='pic'>
						<img src={`${path}/img/main6.jpg`} alt='' />
					</div>
					<div className='content'>
						<h1>Place where professional</h1>
						<p>
							We are partners united by the desire to create
							<br /> unique design-driven websites. In our work,
							<br /> we are looking for the right balance between
							<br /> usability and creativity to ensure the website <br />
							is easy to use, memorable and pleasurable.
						</p>
						<a href='#' id='btn'>
							VIEW MORE
						</a>
					</div>
				</div>
				<div className='fon'>
					<div className='left'>
						<h2>
							<FontAwesomeIcon icon={['fab', 'apple']} />
						</h2>
						<h1 id='tit'>ARTISTRY</h1>
						<p>
							Lorem ipsum dolor sit amet, me a dicat doct <br />
							elanti ei. Mel modo wisi ad, ne vel of eius an <br />
							cilae pe ricua sit amet su dir.
						</p>
						<a href='#' id='btn'>
							VIEW MORE
						</a>
					</div>
					<div className='middle'>
						<h2>
							<FontAwesomeIcon icon={['fab', 'microsoft']} />
						</h2>
						<h1 id='tit'>DEVOTION</h1>
						<p>
							Lorem ipsum dolor sit amet, me a dicat doct <br />
							elanti ei. Mel modo wisi ad, ne vel of eius an <br />
							cilae pe ricua sit amet su dir.
						</p>
						<a href='#' id='btn'>
							VIEW MORE
						</a>
					</div>
					<div className='right'>
						<h2>
							<FontAwesomeIcon icon={['fab', 'google']} />
						</h2>
						<h1 id='tit'>PASSION</h1>
						<p>
							Lorem ipsum dolor sit amet, me a dicat doct <br />
							elanti ei. Mel modo wisi ad, ne vel of eius an <br />
							cilae pe ricua sit amet su dir.
						</p>
						<a href='#' id='btn'>
							VIEW MORE
						</a>
					</div>
				</div>
			</section>

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

export default Vids;
