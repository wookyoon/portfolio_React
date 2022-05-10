import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Popup from '../common/Popup';

function Youtube() {
	const [vids, setVids] = useState([]);
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyBZFBuapkASPcRBXB2-d_ak5-ecCpVicI4';
		const playlistId = 'PLICf7Erquw0j_ywqsj-7AWFW-jksjBiaO';
		const num = 9;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;
		axios.get(url).then((json) => {
			console.log(json.data.items);
			setVids(json.data.items);
		});
	}, []);

	const handleClick = (index) => {
		setOpen(true);
		setIndex(index);
	};

	return (
		<>
			<Layout name={'Youtube'}>
				<div className='title'>
					<h1>THE BEST TEA-SHOP</h1>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium
						<br />
						doloremque laudantium, totam rem aperiam, eaque ipsa quae.
					</p>
				</div>
				{vids.map((vid, idx) => {
					const tit = vid.snippet.title;
					const desc = vid.snippet.description;
					// const date = vid.snippet.publishedAt;

					return (
						<>
							<article key={idx} onClick={() => handleClick(idx)}>
								<div className='pic'>
									<img src={vid.snippet.thumbnails.standard.url} />
								</div>
								<h2>{tit.length > 44 ? tit.substr(0, 44) + '...' : tit}</h2>
								<p>{desc.length > 150 ? desc.substr(0, 150) + '...' : desc}</p>
								{/* <span>{date.split('T')[0]}</span> */}
							</article>
						</>
					);
				})}
			</Layout>

			{open ? (
				<Popup setOpen={setOpen}>
					<iframe
						//팝업이 호출될때 변경된 index순번의 vids state값의 데이터값이 팝업영상으로 출력
						src={`https://www.youtube.com/embed/${vids[index].snippet.resourceId.videoId}`}
						frameborder='0'></iframe>
				</Popup>
			) : null}
		</>
	);
}

export default Youtube;
