import { useContext, useEffect } from 'react';
import classes from '../style/Login.module.css';

import axios from 'axios';
import { useState } from 'react';

import { store } from '../../context/authContext';
import router from 'next/router';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/vi/user'
});

function Login() {
	const { state, dispatach } = useContext(store);
	const { userInfo } = state;
	const [password, setpassword] = useState(false);
	const [message, setmessage] = useState('');
	const [info, setinfo] = useState({
		Email: '',
		fullname: '',
		Phoneno: '',
		Study: 'B.A',
		Semaster: '1',
		password: ''
	});
	const handlechange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setinfo({ ...info, [name]: value });
	};
	const Login = () => {
		router.push('/Login');
	};

	const handlesubmit = async (event) => {
		// const router = useRouter()

		event.preventDefault();
		console.log(info);
		const data = await api
			.post('/signup', info)
			.then((data) => {
				return data;
			})
			.catch((error) => {
				return error;
			});
		if (data.status === 201) {
			const error = data.data.error;

			setmessage(error);
		}
		{
			setmessage(data.data.message);
		}
	};

	return (
		<div className={classes.form_box}>
			<div className={classes.company_info_on_page}>
				<div>
					<h1>Incense8</h1>
				</div>
				<div className={classes.Cute_doll}>
					<img src='Group.svg' alt='' />
				</div>
				<div className={classes.Welcome_communtiy}>
					<h3>Welcome aboard my friend</h3>
					<p>Just a couple of Click and start</p>
				</div>
			</div>
			<form onSubmit={handlesubmit}>
				<div className={classes.form_input_container}>
					<div className={classes.comunity_greting_input}>
						<div className={classes.form_heading}>
							<span>Welcome!</span>
						</div>
						<div className={classes.form_input_Section}>
							<div className={classes.form_input_Section_Collection}>
								<div className={classes.form_div}>
									<input
										type='Email'
										name='Email'
										placeholder='Email'
										required={true}
										// onChange={this.handlechange}
										onChange={handlechange}
									/>
								</div>
								<div className={classes.form_div}>
									<input
										type='text'
										name='fullname'
										required={true}
										onChange={handlechange}
										placeholder='Fullname'
									/>
								</div>
								{/** */}
								<div className={classes.form_div}>
									<input
										type='tel'
										name='Phoneno'
										placeholder='Phoneno'
										required={true}
										// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										onChange={handlechange}
									/>
								</div>
								{/** */}
								<div className={classes.form_div_Selection}>
									<select
										name='Study'
										onChange={handlechange}
										required={true}
										style={{ color: 'black' }}
									>
										<option value=''>Branch</option>
										<option value='B.A'>B.A</option>
										<option value='B.Teach'>B.Teach</option>
										<option value='B.com'>B.com</option>
										<option value='B.voc'>B.voc</option>
									</select>
									{/* </div>
                  {/** */}
									{/* <div className={classes.form_div}>  */}

									<select
										name='Semaster'
										required={true}
										onChange={handlechange}
										style={{ color: 'black' }}
									>
										<option value=''>Semaseter</option>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
									</select>
								</div>
								{/** */}
								<div className={classes.form_div}>
									<input
										type={password ? 'Text' : 'password'}
										name='password'
										autoComplete='off'
										placeholder='Password'
										required={true}
										onChange={handlechange}
									/>
									<img
										src='Eye.svg'
										alt=''
										onClick={(e) => setpassword(!password)}
									/>
								</div>
								{/* <div className={classes.Forget_password}>
                    <a href="/">Forget Password?</a>
                  </div> */}
								<button type='submit'>Signup</button>
							</div>
						</div>
						<div className={classes.Signup_option}>
							<div>
								<span>Already have Account?</span>
							</div>
							<button onClick={Login}>Log In</button>
						</div>
					</div>

					<div>{message}</div>
				</div>
			</form>
			<div></div>
		</div>
	);
}

export default Login;
