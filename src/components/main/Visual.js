import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const path = process.env.PUBLIC_URL;

function Visual() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<figure className='myScroll on'>
			<Swiper
				spaceBetween={0}
				loop={true}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				grabCursor={true}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}>
				<SwiperSlide>
					<img src={`${path}/img/main_1.jpg`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_2.jpg`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/main_3.jpg`} alt='' />
				</SwiperSlide>
			</Swiper>
			<div className='wrap'>
				<h1 data-aos='fade-down' data-aos-duration='1000' data-aos-delay='500'>
					Urban Luxury Style
				</h1>
				<h2
					data-aos='fade-right'
					data-aos-duration='1000'
					data-aos-delay='1000'>
					TWO FOR TWO
				</h2>
				<div data-aos='fade-up' data-aos-duration='1000' data-aos-delay='1500'>
					<a href='#'>THE SHOP</a>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
