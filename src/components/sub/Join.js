import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const path = process.env.PUBLIC_URL;

function Join() {
	const history = useHistory();

	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		comments: '',
		gender: null,
		interests: null,
		edu: '',
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;
		if (val.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (val.email.length < 8 || !/@/.test(val.email)) {
			errs.email = '이메일은 8글자 이상 @를 포함해 입력하세요';
		}
		if (
			val.pwd1.length < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 5글자 이상 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = '비밀번호 2개를 동일하게 입력하세요';
		}
		if (!val.gender) {
			errs.gender = '성별을 선택하세요';
		}
		if (!val.interests) {
			errs.interests = '관심사를 하나이상 선택하세요';
		}
		if (val.comments.length < 10) {
			errs.comments = '남기는 말은 10글자 이상 입력하세요';
		}
		if (val.edu === '') {
			errs.edu = '학력을 선택하세요';
		}
		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...val, [name]: isCheck });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.options[e.target.selectedIndex].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleReset = () => {
		setVal(initVal);
		setErr({});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;
		if (len === 0 && isSubmit) {
			history.push('/');
		}
	}, [err]);

	useEffect(() => {
		handleReset();
	}, [success]);

	return (
		<Layout name={'Join'} img={'pic6.jpg'}>
			{success ? <h2>회원가입을 축하합니다.</h2> : null}

			<div className='title'>
				<h1>DINERS CLUB</h1>
				<p>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium
					<br />
					doloremque laudantium, totam rem aperiam, eaque ipsa quae.
				</p>
			</div>

			<div className='video'>
				<video src={`${path}/img/vid3.mp4`} loop autoPlay muted></video>
				<h2>Being The Member</h2>
			</div>
			<div className='wrap'>
				<div className='contact'>
					<div className='warp'>
						<div>
							<h1>JOIN OUR NEWSLETTER</h1>
							<p>Class aptent taciti sociosqu ad litora torquent per</p>

							<input id='email' type='text' placeholder='Email' name='email' />
							<button>
								<a href='#'>SUBSCRIBE NOW</a>
							</button>
						</div>
					</div>
				</div>

				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend></legend>
						<table border='0'>
							<caption></caption>
							<tbody>
								{/* user id */}
								<tr>
									<th scope='row'>
										<label htmlFor='userid'>USER ID</label>
									</th>
									<td>
										<input
											type='text'
											id='userid'
											name='userid'
											placeholder=' input ID'
											value={val.userid}
											onChange={handleChange}
										/>
										<span className='err'>{err.userid}</span>
									</td>
								</tr>
								{/* pwd1 */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd1'>PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd1'
											id='pwd1'
											placeholder=' input password'
											value={val.pwd1}
											onChange={handleChange}
										/>
										<span className='err'>{err.pwd1}</span>
									</td>
								</tr>
								{/* pwd2 */}
								<tr>
									<th scope='row'>
										<label htmlFor='pwd2'>RE-PASSWORD</label>
									</th>
									<td>
										<input
											type='password'
											name='pwd2'
											id='pwd2'
											placeholder=' re-input password'
											value={val.pwd2}
											onChange={handleChange}
										/>
										<span className='err'>{err.pwd2}</span>
									</td>
								</tr>
								{/* email */}
								<tr>
									<th scope='row'>
										<label htmlFor='email'>E-MAIL</label>
									</th>
									<td>
										<input
											type='text'
											id='email'
											name='email'
											placeholder=' input your email'
											value={val.email}
											onChange={handleChange}
										/>
										<span className='err'>{err.email}</span>
									</td>
								</tr>
								{/* gender */}
								<tr>
									<th scope='row'>GENDER</th>
									<td>
										<label htmlFor='male'>Male&ensp;</label>
										<input
											type='radio'
											id='male'
											name='gender'
											onChange={handleRadio}
										/>
										<label htmlFor='female'>&ensp;Female&ensp;</label>
										<input
											type='radio'
											id='female'
											name='gender'
											onChange={handleRadio}
										/>
										<span className='err'>{err.gender}</span>
									</td>
								</tr>
								{/* interests */}
								<tr>
									<th scope='row'>INTERESTS</th>
									<td>
										<label htmlFor='sports'>Sports&ensp;</label>
										<input
											type='checkbox'
											name='interests'
											id='sports'
											onChange={handleCheck}
										/>
										<label htmlFor='game'>&ensp;Game&ensp;</label>
										<input
											type='checkbox'
											name='interests'
											id='game'
											onChange={handleCheck}
										/>
										<label htmlFor='music'>&ensp;Music&ensp;</label>
										<input
											type='checkbox'
											name='interests'
											id='music'
											onChange={handleCheck}
										/>
										<span className='err'>{err.interests}</span>
									</td>
								</tr>

								{/* edu */}
								<tr>
									<th>
										<label htmlFor='edu'>EDUCATION</label>
									</th>
									<td>
										<select name='edu' id='eud' onChange={handleSelect}>
											<option value=''>select education</option>
											<option value='elementary-school'>초등학교 졸업</option>
											<option value='middle-school'>중학교 졸업</option>
											<option value='high-school'>고등학교 졸업</option>
											<option value='college'>대학교 졸업</option>
										</select>
										<span className='err'>{err.edu}</span>
									</td>
								</tr>

								{/* comments */}
								<tr>
									<th scope='row'>
										<label htmlFor='comments'>COMMENTS</label>
									</th>
									<td>
										<textarea
											name='comments'
											id='comments'
											cols='30'
											rows='5'
											value={val.comments}
											onChange={handleChange}></textarea>
										<span className='err'>{err.commetns}</span>
									</td>
								</tr>
								{/* button set */}
								<tr>
									<th colSpan='2'>
										<input
											id='cancel'
											type='reset'
											value='CANCEL'
											onClick={handleReset}
										/>
										<input
											id='submit'
											type='submit'
											value='SEND'
											onClick={() => setIsSubmit(true)}
										/>
									</th>
								</tr>
							</tbody>
						</table>
						<div className='pic'>
							<img src='{process.env.PUBLIC_URL/img/join.jpg}' alt='' />
						</div>
					</fieldset>
				</form>
			</div>

			<div className='address'>
				<div className='wrap'>
					<div className='left'>
						<h2>CONTACT US</h2>
						<a href='#'>00 1234 5678 5411</a>
						<br />
						<a href='#'>+22 1234 5678 5411</a>
					</div>
					<div className='middle'>
						<h2>ADDRESS</h2>
						<a href='#'>22 East 41/B Street,</a>
						<br />
						<a href='#'> San Francisco, CA 92301, USA</a>
					</div>
					<div className='right'>
						<h2>EMAIL</h2>
						<a href='#'>infoNY@kookle.com</a>
						<br />
						<a href='#'>infoSA@kookle.com</a>
					</div>
					<div className='end'>
						<h2>FOLLOW US</h2>
						<a href='#'>Instagram</a>
						<br />
						<a href='#'>Facebook</a>
					</div>
				</div>
			</div>
		</Layout>
	);
}
export default Join;
