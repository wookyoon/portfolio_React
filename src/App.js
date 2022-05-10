import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import News from './components/main/News';
import Visual from './components/main/Visual';

import Community from './components/sub/Community';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Join from './components/sub/Join';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';

import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Visual />
					<News />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
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
