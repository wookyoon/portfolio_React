import axios from 'axios';
const path = process.env.PUBLIC_URL;

export const fetchFlickr = async (opt) => {
	const key = '0704e8db014aec14b6eeb7b688a6aa3c';
	const num = opt.count;
	const method_interest = 'flickr.interestingness.getList';
	const method_search = 'flickr.photos.search';
	const method_user = 'flickr.people.getPhotos';
	let url = '';

	if (opt.type === 'interest') {
		url = `https://www.flickr.com/services/rest/?method=${method_interest}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json`;
	}
	if (opt.type === 'search') {
		url = `https://www.flickr.com/services/rest/?method=${method_search}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&tags=${opt.tag}`;
	}
	if (opt.type === 'user') {
		url = `https://www.flickr.com/services/rest/?method=${method_user}&per_page=${num}&api_key=${key}&nojsoncallback=1&format=json&user_id=${opt.user}`;
	}
	return await axios.get(url);
};

export const fetchYoutube = async () => {
	const key = 'AIzaSyBZFBuapkASPcRBXB2-d_ak5-ecCpVicI4';
	const playlistId = 'PLICf7Erquw0j_ywqsj-7AWFW-jksjBiaO';
	const num = 6;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};

export const fetchMembers = async () => {
	const url = path + '/DB/member.json';
	return await axios.get(url);
};
