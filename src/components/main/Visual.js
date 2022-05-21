import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const path = process.env.PUBLIC_URL;

function Visual() {
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
				<h1>Urban Luxury Style</h1>
				<h2>TWO FOR TWO</h2>
				<div>
					<a href='#'>THE SHOP</a>
				</div>
			</div>
		</figure>
	);
}

export default Visual;
