import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const path = process.env.PUBLIC_URL;

function Footer() {
	return (
		<footer>
			<div className='vid'>
				<video src={`${path}/img/vid1.mp4`} loop autoPlay muted></video>
				<h2>Get Your Style Now</h2>
				<a href='#'>VIEW MORE</a>
			</div>

			<Swiper
				slidesPerView={5}
				spaceBetween={0}
				slidesPerGroup={1}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 1000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className='mySwiper'>
				<SwiperSlide>
					<img src={`${path}/img/lo1.png`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/lo2.png`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/lo3.png`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/lo4.png`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/lo5.png`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/lo6.png`} alt='' />
				</SwiperSlide>
			</Swiper>
			<div className='inner'>
				<div className='left'>
					<h2>ZEBRA</h2>
					<p>
						The era of multipurpose theme has been turned into
						<br />a new leaf with the birth of Nito. It will amaze you
						<br />
						with its powerful technology as well as exquisite
						<br />
						design in minimal style.
					</p>
					<ul>
						<li>
							<a href='#'>
								<i class='fa-brands fa-youtube'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='fa-brands fa-instagram' id='insta'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='fa-brands fab fa-facebook'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='fa-brands fab fa-twitter'></i>
							</a>
						</li>
					</ul>
				</div>
				<div className='middle_0'>
					<h6>NAVIGATION</h6>
					<ul>
						<li>
							427 Ward Divide Suite 421,
							<br />
							New York, New York, USA
						</li>
						<li>rilint@example.com</li>
						<li>T / (800) 412 2698</li>
						<li>
							<a href='https://www.google.com/'>www.google.com</a>
						</li>
					</ul>
				</div>
				<div className='middle'>
					<h6>CONTACT</h6>
					<ul>
						<li>
							14 Tottenham Courtten Road, London,
							<br /> England.
						</li>
						<li>info@zooka.com</li>
						<li>T / (102) 6666 8888</li>
						<li>
							<a href='https://www.naver.com/'>www.naver.com</a>
						</li>
					</ul>
				</div>
				<div className='right'>
					<h6>LATEST POST</h6>
					<ul>
						<li>
							<a href='#'>Supersonic import</a>
							<span>October 12, 2022</span>
						</li>
						<li>
							<a href='#'>Effortless customization</a>
							<span>October 12, 2022</span>
						</li>
						<li>
							<a href='#'>Powerful shortcodes</a>
							<span>October 12, 2022</span>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
