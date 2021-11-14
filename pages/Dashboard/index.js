import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import classes from '../../styles/Dashboard.module.css';
import { store } from '../../context/authContext';
import Dashboardholder from '../../components/Dashboard/Dashboardholder';
import Cookies from 'js-cookie';

function Dashboard() {
	const { state, dispatach } = useContext(store);
	const router = useRouter();
	const { userInfo } = state;
	useEffect(() => {
		if (!userInfo) {
			router.push('/');
		}
	}, []);
	const LogoutClick = () => {
		dispatach({ type: 'USER_LOGOUT' });
		Cookies.remove('userInfo');
		router.push('/');
	};
	return (
		<div className={classes.Dashboard_holder}>
			<div className={classes.Dashboard_Navigation}>
				<div className={classes.Dashboard_holder_image}>
					<img src='/icons8-user-100.png' alt='' />
				</div>
				<div className={classes.Dashboard_Name}>
					<span>{Cookies.get('fullname')}</span>
				</div>

				<div>
					<ul className={classes.Navigation_dash}>
						<li>
							<a href=''>Dashboard</a>
						</li>
						<li>
							<a href=''>Messages</a>
						</li>
						<li>
							<a href=''>Payment</a>
						</li>
						<li>
							<a href=''>Bocklog</a>
						</li>
						<li>
							<a href=''>Contact Us</a>
						</li>
						<li>
							<a onClick={LogoutClick}>Logout</a>
						</li>
					</ul>
				</div>
			</div>
			<Dashboardholder />
		</div>
	);
}

export default Dashboard;
