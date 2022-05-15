import { useState, useEffect } from 'react';
const path = process.env.PUBLIC_URL;

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');

		const dummyPosts = [
			{ title: 'Hello5', content: 'Here comes description in detail.' },
			{ title: 'Hello4', content: 'Here comes description in detail.' },
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];

		if (data) {
			return JSON.parse(data);
		} else {
			return dummyPosts;
		}
	};

	const [posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(posts));
	}, []);
	return (
		<section id='news'>
			<h1>Recent News</h1>
			<div className='pic'>
				<img src={`${path}/img/j1.jpg`} alt='' />
			</div>
			<div>
				{/* posts값 중에서 최근글 3개까지만 화면에 출력 */}
				{posts.map((post, idx) => {
					if (idx < 4) {
						return (
							<li key={idx}>
								<h2>{post.title}</h2>
								<p>{post.content}</p>
							</li>
						);
					}
				})}
			</div>
		</section>
	);
}

export default News;
