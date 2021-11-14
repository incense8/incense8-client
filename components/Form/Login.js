import { useContext, useEffect } from 'react';
import classes from '../style/Signup.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState } from 'react';
import router from 'next/router';
import { store } from '../../context/authContext';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api/vi/user'
});

function Login() {
	const { state, dispatach } = useContext(store);
	const { userInfo } = state;

	// if(userInfo){
	//   router.push("/")
	// }
	const [password, setpassword] = useState(false);

	const [info, setState] = useState({
		Email: '',
		password: ''
	});

	const handlechange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setState({ ...info, [name]: value });
	};

	const handlesubmit = async (event) => {
		event.preventDefault();
		console.log(state);
		const data = await api
			.post('/login', info)
			.then((data) => {
				return data;
			})
			.catch((error) => {
				return error;
			});
		if (data.status === 201) {
			const error = data.data.error;

			console.log(error);
		}
		if (data.status === 200) {
			const userInfodata = data.data;
			const cookedata = JSON.stringify(userInfodata);

			// localStorage.setItem("username", cookedata.fullname)
			console.log(info);
			Cookies.set('fullname', data.data.fullname);
			Cookies.set('Semaster', data.data.Semaster);
			Cookies.set('userInfo', cookedata);
			dispatach({ type: 'USER_LOGIN', Payload: userInfodata });
			router.push('/');
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
										type={password ? 'Text' : 'password'}
										name='password'
										autoComplete='off'
										placeholder='Password'
										required={true}
										// onChange={this.handlechange}
										onChange={handlechange}
									/>
									<img
										src='Eye.svg'
										alt=''
										onClick={(e) => setpassword(!password)}
									/>
								</div>
								<div className={classes.Forget_password}>
									<a href='/'>Forget Password?</a>
								</div>
								<button type='submit'>Log in</button>
							</div>
						</div>
						<div className={classes.Signup_option}>
							<div>
								<span>Have no Account yet?</span>
							</div>
							<button>Sign up</button>
						</div>
					</div>

					<div>
						{/* <p style={{ color: "black" }}>{this.state.Waring}</p> */}
					</div>
				</div>
			</form>
			<div></div>
		</div>
	);
}

export default Login;
