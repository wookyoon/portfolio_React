import Layout from '../common/Layout';
import { useRef, useState, useEffect } from 'react';

function Community() {
	const input = useRef(null);
	const textarea = useRef(null);
	const editInput = useRef(null);
	const editTextarea = useRef(null);

	/*
	const dummyPosts = [
		{ title: 'Hello5', content: 'Here comes description in detail.' },
		{ title: 'Hello4', content: 'Here comes description in detail.' },
		{ title: 'Hello3', content: 'Here comes description in detail.' },
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	*/

	//로컬저장소에서 데이터를 받아와서 json 형태로 변환해 반환
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return JSON.parse(data);
	};

	//반환된 값을 바로 posts state에 저장
	const [posts, setPosts] = useState(getLocalData());
	const [allowed, setAllowed] = useState(true);

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			alert('제목과 본문을 입력하세요.');
			return;
		}

		setPosts([
			{ title: input.current.value, content: textarea.current.value },
			...posts,
		]);
		resetPost();
	};

	const resetPost = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const deletePost = (index) => {
		setPosts(posts.filter((_, idx) => idx !== index));
	};

	const enableUpdate = (index) => {
		setAllowed(false);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (index) => {
		setAllowed(true);
		setPosts(
			posts.map((post, idx) => {
				if (idx === index) post.enableUpdate = false;
				return post;
			})
		);
	};

	const updatePost = (index) => {
		if (!editInput.current.value.trim() || !editTextarea.current.value.trim()) {
			alert('수정할 제목과 본문을 입력하세요.');
			return;
		}
		setAllowed(true);

		setPosts(
			posts.map((post, idx) => {
				if (idx === index) {
					post.title = editInput.current.value;
					post.content = editTextarea.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
	};

	useEffect(() => {
		//posts가 변경될때마다 해당 state를 문자열로 변환해서 로컬 저장소에 저장
		localStorage.setItem('post', JSON.stringify(posts));
	}, [posts]);

	return (
		<Layout name={'Community'}>
			<div className='title'>
				<h1>AUDIENCE OPINION</h1>
				<p>
					Suspendisse rutrum nibh urna, nec sodales enim sollicitudin sed.
					Vivamus <br />
					accusantium doloremque laudantium, totam rem aperiam.
				</p>
			</div>

			<div className='inputBox'>
				<input
					type='text'
					placeholder='  Please, leave a title'
					ref={input}
					className='memo'
				/>
				<br />
				<textarea
					ref={textarea}
					cols='30'
					rows='10'
					placeholder='  Please leave a message'
					className='memo'></textarea>
				<br />

				<button onClick={resetPost}>cancel</button>
				<button onClick={createPost}>create</button>
			</div>

			<div className='showBox'>
				{posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//수정모드
								<>
									<input
										type='text'
										defaultValue={post.title}
										ref={editInput}
									/>
									<br />
									<textarea
										ref={editTextarea}
										cols='30'
										rows='10'
										defaultValue={post.content}></textarea>

									<div className='btns'>
										<button onClick={() => disableUpdate(idx)}>cancel</button>
										<button onClick={() => updatePost(idx)}>save</button>
									</div>
								</>
							) : (
								//출력모드
								<>
									<h2>{post.title}</h2>
									<p>{post.content}</p>

									<div className='btns'>
										<button
											onClick={() => {
												if (allowed) enableUpdate(idx);
											}}>
											edit
										</button>
										<button onClick={() => deletePost(idx)}>delete</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>

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
		</Layout>
	);
}

export default Community;
