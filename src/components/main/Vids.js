import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import Popup from '../common/Popup';
const path = process.env.PUBLIC_URL;

function Vids() {
	const vidData = useSelector((store) => store.youtubeReducer.youtube);
	const pop = useRef(null);
	const [index, setIndex] = useState(0);

	return (
		<>
			<section id='vids' className='myScroll'>
				<h2>Recent Youtube</h2>
				<ul>
					{vidData.map((vid, idx) => {
						const tit = vid.snippet.title;
						if (idx < 8) {
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
				<div>
					<a href='#'>VIEW MORE</a>
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
