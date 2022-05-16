import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';

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

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		//플리커 액션 객체를 saga.js에 전달
		dispatch({
			type: types.FLICKR.start,
			opt: { type: 'user', count: 100, user: '195467310@N04' },
		});

		//유튜브 액션 객체를 saga.js에 전달
		dispatch({ type: types.YOUTUBE.start });

		//멤버 액션 객체를 sgag.js에 전달
		dispatch({ type: types.MEMBERS.start });
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
