import classes from '../style/Dashboardholder.module.css';
import { useContext } from 'react';
import { store } from '../../context/authContext';
import Cookies from 'js-cookie';

function Dashboardholder() {
	const { state, dispatach } = useContext(store);
	const { userInfo } = state;
	return (
		<div className={classes.Dashboardhoolder_data}>
			<div className={classes.holder}>
				{' '}
				<div>
					<div>
						<div>
							<h1>Hey!!! Welcome aboard.</h1>
						</div>
						<div>
							<h1>Incense8</h1>
						</div>
					</div>
					<div className={classes.User_info_holder}>
						<div>
							<h2>{Cookies.get('fullname')}</h2>
							<br />
							<div>
								<h3>Semester</h3>
								<span>{Cookies.get('Semaster')}</span>
							</div>
						</div>
						<div>
							<h3>Your Collage</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboardholder;
