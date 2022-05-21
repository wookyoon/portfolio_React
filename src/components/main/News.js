import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper';
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

			<div className='wrap'>
				<div className='pic'>
					{/* <img src={`${path}/img/j1.jpg`} alt='' /> */}
					<Swiper
						spaceBetween={10}
						loop={true}
						centeredSlides={true}
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Autoplay]}
						className='mySwiper'>
						<SwiperSlide>
							<img src={`${path}/img/j1.jpg`} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${path}/img/j2.jpg`} alt='' />
						</SwiperSlide>
						<SwiperSlide>
							<img src={`${path}/img/j3.jpg`} alt='' />
						</SwiperSlide>
					</Swiper>
				</div>
				<div>
					{/* posts값 중에서 최근글 3개까지만 화면에 출력 */}
					{posts.map((post, idx) => {
						if (idx < 5) {
							return (
								<li key={idx}>
									<h2>{post.title}</h2>
									<p>{post.content}</p>
								</li>
							);
						}
					})}
				</div>
			</div>
		</section>
	);
}

export default News;
