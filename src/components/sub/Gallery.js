import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Gallery() {
	const [pics, setPics] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const key = '0704e8db014aec14b6eeb7b688a6aa3c';
		const num = 20;
		const method_interest = 'flickr.interestingness.getList';
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1`;

		axios.get(url).then((json) => {
			console.log(json.data.photos.photo);
			setPics(json.data.photos.photo);
		});
	}, []);

	return (
		<>
			<Layout name={'Gallery'}>
				<ul>
					{pics.map((pic, idx) => {
						return (
							<li key={idx}>
								<div className='inner'>
									<div className='pic'>
										<img
											src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
											alt=''
										/>
									</div>
									<div className='box'>
										<p>{pic.title}</p>
										<div className='profile'>
											<img
												src='{`http://farm${pic.farm}.staticflickr.com/${pic.server}/buddyicons/${pic.owner}.jpg`}'
												alt=''
											/>
											<span>{pic.owner}</span>
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</Layout>
			{/* <Popup></Popup> */}
		</>
	);
}

export default Gallery;
