import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

	useEffect(() => {
		AOS.init();
	});
	return (
		<section id='news' className='myScroll on'>
			<div className='wrpper'>
				<h1
					id='title'
					data-aos='fade-down'
					data-aos-duration='1000'
					data-aos-offset='300'>
					Welcome to Barberian Man
				</h1>
				<h2
					data-aos='fade-right'
					data-aos-duration='1000'
					data-aos-offset='300'>
					Our Company always offers proffessional quality and we are ready to
					deal with your highest expectations.
				</h2>
				<p data-aos='fade-left' data-aos-duration='1000' data-aos-offset='300'>
					Our Services are dedicated for your personal success. Here we have
					award winning staff that have demonstrated talent of
					<br /> master barbers at several notable styling competitions. Let our
					barber to be your personal stylist
					<br /> and you will never be disappointed.
				</p>
				<img
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-offset='200'
					src={`${path}/img/auto1.png`}
					alt=''
				/>
				<a
					href='#'
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-offset='0'>
					VIEW MORE
				</a>
			</div>

			<h1 data-aos='fade-down' data-aos-duration='1000' data-aos-offset='300'>
				Recent News
			</h1>

			<div className='wrap'>
				<div
					className='pic'
					data-aos='flip-right'
					data-aos-duration='1500'
					data-aos-offset='300'>
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
								<li
									key={idx}
									data-aos='flip-down'
									data-aos-duration='1000'
									data-aos-offset='300'>
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
