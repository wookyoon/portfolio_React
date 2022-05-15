import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYoutube, setMembers, setFlickr } from './redux/action';
import axios from 'axios';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import Main from './components/main/Main';

import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

const path = process.env.PUBLIC_URL;

function App() {
	const dispatch = useDispatch();
	const fetchYoutube = async () => {
		const key = 'AIzaSyBZFBuapkASPcRBXB2-d_ak5-ecCpVicI4';
		const playlistId = 'PLICf7Erquw0j_ywqsj-7AWFW-jksjBiaO';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			dispatch(setYoutube(json.data.items));
		});
	};
	const fetchMembers = async () => {
		const url = path + '/DB/member.json';
		await axios.get(url).then((json) => {
			dispatch(setMembers(json.data.members));
		});
	};
	const fetchFlickr = async () => {
		const key = '0704e8db014aec14b6eeb7b688a6aa3c';
		const method_interest = 'flickr.interestingness.getList';
		const num = 20;
		const url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json`;

		await axios.get(url).then((json) => {
			dispatch(setFlickr(json.data.photos.photo));
		});
	};

	useEffect(() => {
		fetchYoutube();
		fetchMembers();
		fetchFlickr();
	}, []);

	return (
		<>
			<Switch>
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />} />
			</Switch>

			<Route path='/department' component={Department} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/community' component={Community} />
			<Route path='/location' component={Location} />
			<Route path='/join' component={Join} />

			<Footer />
		</>
	);
}

export default App;
