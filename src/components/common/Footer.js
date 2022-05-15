import { useSelector } from 'react-redux';
const path = process.env.PUBLIC_URL;

function Footer() {
	const members = useSelector((store) => store.memberReducer.members);

	return (
		<footer>
			<div className='inner'>
				<p>2022 WK &copy; ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	);
}

export default Footer;
