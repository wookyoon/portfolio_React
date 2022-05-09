import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
const path = process.env.PUBLIC_URL;

function Location() {
	//window전역에서 kakao라는 이름으로 등록되어 있는 객체를 비구조할당으로 직접 변수에 할당
	const { kakao } = window;
	const container = useRef(null);
	const branch = useRef(null);
	const info = [
		{
			title: '여의도 본점',
			latlng: new kakao.maps.LatLng(37.518250935810514, 126.93070443288991),
			imgSrc: `${path}/img/marker1.png`,
			imgSize: new kakao.maps.Size(99, 80),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '상수동 창고',
			latlng: new kakao.maps.LatLng(37.54879459319977, 126.91637232925349),
			imgSrc: `${path}/img/marker2.png`,
			imgSize: new kakao.maps.Size(99, 80),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '이태원 프리덤',
			latlng: new kakao.maps.LatLng(37.534399064279796, 126.99432029447635),
			imgSrc: `${path}/img/marker3.png`,
			imgSize: new kakao.maps.Size(99, 80),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];

	const [map, setMap] = useState(null);
	const [mapInfo] = useState(info);
	const [traffic, setTraffic] = useState(false);
	const [index, setIndex] = useState(0);

	const mapInit = () => {};

	//해당 컴포넌트가 처음 로딩될때 한번만 실행
	useEffect(() => {
		const options = {
			center: mapInfo[index].latlng,
			level: 3,
		};
		const map_instance = new kakao.maps.Map(container.current, options);
		//카카오 생성자로 만들어진 인스턴스를 map스테이트에 옮겨담아 해당 컴포넌트 전역에서 map_instance를 활용
		//컴포넌트가 처음 mount시 생성된 인스턴스 map값을 해당 컴포넌트에서 자유롭게 쓰면서 상태관리하기 위해서
		//map state에 옮겨담음
		setMap(map_instance);

		//마커 위치 인스턴스 생성
		const markerPosition = mapInfo[index].latlng;

		//마커 이미지 인스턴스 생성
		const imageSrc = mapInfo[index].imgSrc; // 마커이미지의 주소입니다
		const imageSize = mapInfo[index].imgSize; // 마커이미지의 크기입니다
		const imageOption = mapInfo[index].imgPos; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		const markerImage = new kakao.maps.MarkerImage(
			imageSrc,
			imageSize,
			imageOption
		);

		//마커 위치 인스턴스를 인수로 넣어서 마커 인스턴스 생성
		const marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
		});

		// 마커가 지도 위에 표시되도록 설정합니다
		// 기존 인스턴스값 인수로 넣어서 최종 마커 생성
		marker.setMap(map_instance);

		//버튼 활성화
		const branch_li = branch.current.querySelectorAll('li');
		for (const btn of branch_li) btn.classList.remove('on');
		branch_li[index].classList.add('on');

		//지도에 타입 컨트롤러 추가
		const mapTypeControl = new kakao.maps.MapTypeControl();
		map_instance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.TOPRIGHT
		);

		//지도에 zoom 컨트롤 추가
		const zoomControl = new kakao.maps.ZoomControl();
		map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const mapInit = () => {
			console.log('마커 중앙 유지');
			map_instance.setCenter(mapInfo[index].latlng);
		};

		//브라우저 리사이즈시 mapInit호출
		window.addEventListener('resize', mapInit);

		//해당 컴포넌트
		return () => {
			window.removeEventListener('resize', mapInit);
		};
	}, [index]);

	useEffect(() => {
		// 처음 mount시 map값이 비어있어서 오류나는걸 해결하기 위해
		// map값이 담겨있을때에만 구문실행되도록 조건문 설정
		if (map) {
			traffic
				? map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
				: map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
		}
	}, [traffic]);

	return (
		<Layout name={'Location'}>
			<div className='contact'>
				<div className='warp'>
					<div className='news'>
						<h1>CONTACT US</h1>
						<p>Class aptent taciti sociosqu ad litora torquent per</p>
					</div>
					<div className='newsForm'>
						<input id='email' type='text' placeholder='Email' name='email' />
						<button>
							<a href='#'>SUBSCRIBE NOW</a>
						</button>
					</div>
				</div>
			</div>
			<div id='map' ref={container}></div>

			<button onClick={() => setTraffic(!traffic)}>
				{traffic ? 'Traffic OFF' : 'Traffic ON'}
			</button>

			{/* 버튼 클릭시 map스테이트에 담겨있는 인스턴스의 addOverlayMap함수 호출 */}
			{/* <button
				onClick={() => {
					map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
				}}>
				Traffic ON
			</button>
			<button
				onClick={() => {
					map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
				}}>
				Traffic OFF
			</button> */}
			<ul className='branch' ref={branch}>
				{mapInfo.map((item, idx) => {
					return (
						<li key={idx} onClick={() => setIndex(idx)}>
							{item.title}
						</li>
					);
				})}
				{/* <li onClick={() => setIndex(0)}>삼성동 코엑스</li>
				<li onClick={() => setIndex(1)}>압구정 로데오</li>
				<li onClick={() => setIndex(2)}>이태원 프리덤</li> */}
			</ul>
		</Layout>
	);
}

export default Location;
