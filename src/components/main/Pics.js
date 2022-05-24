import { useSelector } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import Popup from '../common/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Pics() {
	const pics = useSelector((store) => store.flickrReducer.flickr);
	const [index, setIndex] = useState(0);
	const pop = useRef(null);

	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<section id='pics' className='myScroll'>
				<p data-aos='fade-down' data-aos-duration='1000' data-aos-offset='300'>
					Current Pictures
				</p>

				<ul className='list'>
					{pics.map((pic, idx) => {
						if (idx < 4) {
							return (
								<li
									data-aos='flip-right'
									data-aos-duration='1500'
									data-aos-offset='300'
									key={idx}
									onClick={() => {
										setIndex(idx);
										pop.current.open();
									}}>
									<img
										src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
									/>
									<h2>{pic.title}</h2>
								</li>
							);
						}
					})}
				</ul>
				<a
					href='#'
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-offset='300'>
					VIEW MORE
				</a>
			</section>

			<Popup ref={pop}>
				{pics.length !== 0 && (
					<>
						<img
							src={`https://live.staticflickr.com/${pics[index].server}/${pics[index].id}_${pics[index].secret}_b.jpg`}
						/>
						<span className='close' onClick={() => pop.current.close()}>
							close
						</span>
					</>
				)}
			</Popup>
		</>
	);
}

export default Pics;
